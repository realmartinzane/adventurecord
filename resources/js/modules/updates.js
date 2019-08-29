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

        updateStatus: 0,

        likeUpdateAction: 0,
        unlikeUpdateAction: 0,
        updateLiked: false,
        updateLikesCount: 0
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
        },

        setLikeUpdateAction(state, status)
        {
            state.likeUpdateAction = status
        },

        setUnlikeUpdateAction(state, status)
        {
            state.unlikeUpdateAction = status
        },

        setUpdateLiked(state, status)
        {
            state.updateLiked = status
        },

        setUpdateLike(state, amount)
        {
            state.updateLikesCount += amount
        },

        setUpdateUnlike(state, amount) 
        {
            state.updateLikesCount -= amount
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
            commit('setUpdateLiked', false);
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
            if(response.data.user_like.length > 0) 
                commit('setUpdateLiked', true);
                commit('setUpdateLike', response.data.likes_count);
            
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
        },

        likeUpdate({commit}, data) 
        {
            commit('setLikeUpdateAction', 1);

            UpdateAPI.like(data.id)
                .then(function (response) 
                    {
                        commit('setUpdateLiked', true);
                        commit('setLikeUpdateAction', 2);
                        commit('setUpdateLike', 1);
                    })
                .catch(function () 
                    {
                        commit('setLikeUpdateAction', 3);
                    });
        },

        unlikeUpdate({commit}, data) 
        {
            commit('setUnlikeUpdateAction', 1);

            UpdateAPI.unlike(data.id)
                .then(function (response) 
                    {
                        commit('setUpdateLiked', false);
                        commit('setUnlikeUpdateAction', 2);
                        commit('setUpdateUnlike', 1);
                    })
                .catch(function () 
                    {
                        commit('setUnlikeUpdateAction', 3);
                    });
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
        },

        getUpdateStatus(state) 
        {
            return state.updateStatus
        },

        getLikeUpdateAction(state)
        {
            return state.likeUpdateAction
        },

        getUnlikeUpdateAction(state)
        {
            return state.unlikeUpdateAction
        },

        getUpdateLiked(state)
        {
            return state.updateLiked
        },
        getUpdateLikesCount(state)
        {
            return state.updateLikesCount
        }
    }
}