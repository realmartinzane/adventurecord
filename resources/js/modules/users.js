import UserAPI from '../api/user.js';

export const users =
{
    state:
    {
        user: null,
        userLoad: 0
    },

    mutations:
    {
        setUser(state, user)
        {
            state.user = user
        },

        setUserLoad(state, status)
        {
            state.userLoad = status
        }
    },

    actions:
    {
        fetchAuthUser({commit})
        {
            commit('setUserLoad', 1)
            UserAPI.fetchAuth()
                .then(response => 
                    {
                        console.log(response.data)
                        commit('setUser', response.data)
                        commit('setUserLoad', 2)
                    })
                .catch(err => 
                    {
                        commit('setUser', {})
                        commit('setUserLoad', 3)
                    })
        },
        logout({ commit }) 
        {
            commit('setUserLoad', 0);
            commit('setUser', {});
        }
    },

    getters:
    {
        getUser(state)
        {
            return state.user
        },

        getUserLoad(state)
        {
            return state.userLoad
        }
    }
}