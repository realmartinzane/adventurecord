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

        updateStatus: 0
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

        setUpdateStatus(state, status) 
        {
            state.updateStatus = status
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
            commit('setUpdateStatus', 1)
            let response
            try 
            {
                response = await UpdateAPI.store(data)
            }
            catch(ex)
            {
                commit('setUpdateStatus', 3)
                return 'There was an error. Please try again later.'
            }
            commit('setUpdateStatus', 2)
            return response.data
        },

        async updateUpdate({ commit }, data) 
        {
            commit('setUpdateStatus', 1)
            let response
            try 
            {
                response = await UpdateAPI.update(data.id, data.form)
            }
            catch (ex) 
            {
                commit('setUpdateStatus', 3)
                return 'There was an error. Please try again later.'
            }
            commit('setUpdateStatus', 2)
            return response.data
        },

        async destroyUpdate({ commit }, data) 
        {
            commit('setUpdateStatus', 1)
            let response
            try 
            {
                response = await UpdateAPI.destroy(data.id)
            }
            catch (ex) 
            {
                commit('setUpdateStatus', 3)
                return 'There was an error. Please try again later.'
            }
            commit('setUpdateStatus', 2)
            return response.data
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

        getUpdateStatus(state) 
        {
            return state.updateStatus
        }
    }
}