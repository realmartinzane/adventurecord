import Vue from 'vue'
import VueX from 'vuex'
import router from './routes'

Vue.use(VueX)

export default new VueX.Store(
    {
        state:
        {
            token: null,
            user: null
        },
        mutations:
        {
           authUser(state, data)
           {
               state.token = data.token
               state.user = data.user
           },

           clearAuth(state)
           {
               state.token = null
               state.user = null 
           }
        },
        actions:
        {
            authenticate({dispatch}, data)
            {
                data.self.$auth.authenticate(data.provider)
                    .then(code => 
                    {
                        dispatch('storeUser', {provider: data.provider, code})
                    })
                    .catch(err => 
                    {
                        console.log({ err: err })
                    });
            },

            storeUser({commit, dispatch}, data)
            {
                console.log(data)
                axios.post('/login/' + data.provider, data.code)
                    .then(response => 
                    {
                        console.log(response.data)
                        
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('userId', response.data.id);
                        localStorage.setItem('expirationDate', expirationDate);

                        commit('authUser',
                        {
                            token: response.data.token,
                            user:
                            {
                                id: response.data.id,
                                name: response.data.name,
                                discriminator: response.data.user.discriminator,
                            }
                        })
                        dispatch('setLogoutTimer', response.data.expiresIn * 1000)
                    })
                    .catch(err => 
                    {
                        console.log({ err: err })
                    })
            },

            logout({commit})
            {
                commit('clearAuth')
                localStorage.removeItem('expirationDate')
                localStorage.removeItem('token')
                router.replace('/')
            },

            setLogoutTimer({commit, dispatch}, expiration)
            {
                setTimeout(() =>
                {
                    dispatch('logout')
                }, expiration)
            },
            tryAutoLogin({commit})
            {
                const token = localStorage.getItem('token');
                if(!token) return;

                const expirationDate = localStorage.getItem('expirationDate')
                const now = new Date()
                if(now >= expirationDate) return;

                const userId = localStorage.getItem('userId');
                if (!userId) return;

                commit('authUser', {token, userId})
            }
        },
        getters:
        {
            isAuth(state)
            {
                return state.token !== null
            }
        }
    })