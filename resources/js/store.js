import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store(
    {
        state:
        {
            id: null,
            token: null
        },
        mutations:
        {
           authUser(state, data)
           {
               state.id = data.id
               state.token = data.token
           }
        },
        actions:
        {
            authenticate({dispatch}, data)
            {

                data.self.$auth.authenticate(data.provider)
                    .then(response => 
                    {
                        dispatch('storeUser', {provider: data.provider, response})
                    })
                    .catch(err => 
                    {
                        console.log({ err: err })
                    });
            },

            storeUser({commit, dispatch}, data)
            {
                console.log(data)
                axios.post('/sociallogin/' + data.provider, data.response)
                    .then(response => 
                    {
                        console.log(response.data)
                        commit('authUser',
                        {
                            id: response.data.id,
                            token: response.data.token
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

        }
    })