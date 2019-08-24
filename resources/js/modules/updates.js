import UpdateAPI from '../api/update.js';

export const updates = 
{
    state:
    {
        updates: [],
        updatesLoad: 0,

        update: {},
        updateLoad: 0
    },

    mutations:
    {
        setUpdates(state, data)
        {
            state.updates = data
        },
        
        setUpdatesLoad(state, load)
        {
            state.updatesLoad = load
        },

        setUpdate(state, data) 
        {
            state.update = data
        },

        setUpdateLoad(state, load) 
        {
            state.updateLoad = load
        }
    },
    
    actions:
    {
        fetchAll({commit})
        {
            commit('setUpdatesLoad', 1)
            UpdateAPI.fetchAll()
                .then(response =>
                    {
                        commit('setUpdates', response.data)
                        commit('setUpdatesLoad', 2)
                    })
                .catch(err => 
                    {
                        commit('setUpdates', [])
                        commit('setUpdatesLoad', 3)
                    })
        },

        fetchSingle({ commit }, data) 
        {
            commit('setUpdateLoad', 1)
            UpdateAPI.fetch()
                .then(response => 
                    {
                        commit('setUpdate', response.data)
                        commit('setUpdateLoad', 2)
                    })
                .catch(err => 
                    {
                        commit('setUpdate', {})
                        commit('setUpdateLoad', 3)
                    })
        },
    },
    
    getters:
    {
        setUpdates(state) 
        {
            return state.updates
        },

        setUpdatesLoad(state) 
        {
            return state.updatesLoad
        },

        setUpdate(state) 
        {
            return state.update
        },

        setUpdateLoad(state) 
        {
            return state.updateLoad
        }
    }
}