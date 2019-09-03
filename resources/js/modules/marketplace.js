import MarketplaceAPI from '../api/marketplace.js';
import VueRouter from 'vue-router';

export const marketplace =
{
    state:
    {
        topItems: [],
        topItemsLoad: 0,
    },

    mutations:
    {
        setTopItems(state, data)
        {
            state.topItems = data
        },
        setTopItemsLoad(state, status) 
        {
            state.topItemsLoad = status
        }
    },
    
    actions:
    {
        fetchTopItems({commit})
        {
            commit('setTopItemsLoad', 1)
            MarketplaceAPI.fetchTop()
                .then(response =>
                    {
                        commit('setTopItems', response.data)
                        commit('setTopItemsLoad', 2)
                    })
                .catch(() => 
                    {
                        commit('setUpdates', [])
                        commit('setTopItemsLoad', 3)
                    })
        },
    },

    getters:
    {
        getTopItems(state)
        {
            return state.topItems
        },
        getTopItemsLoad(state) 
        {
            return state.topItemsLoad
        }
    }
}