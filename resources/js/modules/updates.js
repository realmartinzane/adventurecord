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
                        console.log(response.data)
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
            UpdateAPI.fetchSingle(data.id)
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
        getUpdates(state) 
        {
            return state.updates
        },

        getUpdatesLoad(state) 
        {
            return state.updatesLoad
        },

        getUpdate(state) 
        {
            return state.update
        },

        getUpdateLoad(state) 
        {
            return state.updateLoad
        }
    }
}