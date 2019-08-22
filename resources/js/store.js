import Vue from 'vue'
import VueX from 'vuex'

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
           saveToken(state, data)
           {
               state.token = data.token
           },
           storeUser(state, user)
           {
               state.user = user
           }
        },
        actions:
        {
            authenticate({commit, dispatch}, data)
            {

                data.self.$auth.authenticate(data.provider)
                    .then(token => 
                    {
                        commit('saveToken',
                        {
                            token: token.code
                        })
                        dispatch('storeUser', {provider: data.provider, token})
                    })
                    .catch(err => 
                    {
                        console.log({ err: err })
                    });
            },

            storeUser({commit}, data)
            {
                console.log(data)
                axios.post('/sociallogin/' + data.provider, data.token)
                    .then(response => 
                    {
                        console.log(response.data)
                        commit('storeUser',
                        {
                            id: response.data.id,
                            name: response.data.name,
                            discriminator: response.data.user.discriminator,
                            email: response.data.email
                        })
                    })
                    .catch(err => 
                    {
                        console.log({ err: err })
                    })
            }
        },
        getters:
        {
            user(state)
            {
                return state.user
            },
            isAuth(state)
            {
                return state.token !== null
            }
        }
    })