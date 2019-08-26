import UserAPI from '../api/user.js';

export const users =
{
    state:
    {
        authUser: null,
        authUserLoad: 0,

        user: null,
        userLoad: 0,
    },

    mutations:
    {
        setAuthUser(state, user) 
        {
            state.authUser = user
        },

        setAuthUserLoad(state, status) 
        {
            state.authUserLoad = status
        },

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
            commit('setAuthUserLoad', 1)
            UserAPI.fetchAuth()
                .then(response => 
                    {
                        commit('setAuthUser', response.data)
                        commit('setAuthUserLoad', 2)
                    })
                .catch(err => 
                    {
                        commit('setAuthUser', {})
                        commit('setAuthUserLoad', 3)
                    })
        },

        logout({ commit }) 
        {
            commit('setUserLoad', 0);
            commit('setUser', {});
        },

        fetchUser({ commit }, data) 
        {
            commit('setUserLoad', 1)
            UserAPI.fetchSingle(data.id)
                .then(response => 
                    {
                        commit('setUser', response.data)
                        commit('setUserLoad', 2)
                    })
                .catch(err => 
                    {
                        commit('setUser', {})
                        commit('setUserLoad', 3)
                    })
        },
    },

    getters:
    {
        getAuthUser(state) 
        {
            return state.authUser
        },

        getAuthUserLoad(state) 
        {
            return state.authUserLoad
        },

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