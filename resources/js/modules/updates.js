import UpdateAPI from '../api/update.js';
import VueRouter from 'vue-router';

export const updates = 
{
    state:
    {
        updates: [],
        updatesLoad: 0,

        update: {},
        updateLoad: 0,

        updateAdd: 0
    },

    mutations:
    {
        setUpdates(state, data)
        {
            state.updates = data
        },
        
        setUpdatesLoad(state, status)
        {
            state.updatesLoad = status
        },

        setUpdate(state, data) 
        {
            state.update = data
        },

        setUpdateLoad(state, status) 
        {
            state.updateLoad = status
        },

        setUpdateAdd(state, status) 
        {
            state.updateAdd = status
        }
    },
    
    actions:
    {
        fetchUpdates({commit})
        {
            commit('setUpdatesLoad', 1)
            UpdateAPI.fetchAll()
                .then(response =>
                    {
                        commit('setUpdates', response.data)
                        commit('setUpdatesLoad', 2)
                    })
                .catch(() => 
                    {
                        commit('setUpdates', [])
                        commit('setUpdatesLoad', 3)
                    })
        },

        async fetchUpdate({ commit }, data) 
        {
            commit('setUpdateLoad', 1)
            let response;
            try
            {
                response = await UpdateAPI.fetchSingle(data.id)
            }
            catch(ex)
            {
                commit('setUpdate', {})
                commit('setUpdateLoad', 3)
                return 
            }
            commit('setUpdate', response.data)
            commit('setUpdateLoad', 2)
        },

        async storeUpdate({commit}, data)
        {
            commit('setUpdateAdd', 1)
            let response
            try 
            {
                response = await UpdateAPI.store(data)
            }
            catch(ex)
            {
                commit('setUpdateAdd', 3)
                return 'There was an error. Please try again later.'
            }
            commit('setUpdateAdd', 2)
            return response.data
        },

        updateUpdate({ commit }, data) 
        {
            commit('setUpdateAdd', 1)
            UpdateAPI.update(data.id, data.form)
                .then(response => 
                    {
                        commit('setUpdateAdd', 2)
                    })
                .catch(() => 
                    {
                        commit('setUpdateAdd', 3)
                    })
        }
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
        },

        getUpdateAdd(state) 
        {
            return state.updateAdd
        }
    }
}