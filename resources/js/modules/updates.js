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
                        console.log(response.data)
                        commit('setUpdates', response.data)
                        commit('setUpdatesLoad', 2)
                    })
                .catch(() => 
                    {
                        commit('setUpdates', [])
                        commit('setUpdatesLoad', 3)
                    })
        },

        fetchUpdate({ commit }, data) 
        {
            commit('setUpdateLoad', 1)
            UpdateAPI.fetchSingle(data.id)
                .then(response => 
                    {
                        commit('setUpdate', response.data)
                        commit('setUpdateLoad', 2)
                    })
                .catch(() => 
                    {
                        commit('setUpdate', {})
                        commit('setUpdateLoad', 3)
                    })
        },
        storeUpdate({state, commit, dispatch}, data)
        {
            commit('setUpdateAdd', 1)
            UpdateAPI.store(data)
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