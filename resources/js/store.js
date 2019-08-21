import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store(
    {
        state:
        {

        },
        mutations:
        {
            authUser(state, data)
            {
                state.token = data.token
                state.id = data.id
            }
        },
        actions:
        {
            login({commit}, data)
            {
                axios.post('/sociallogin/' + data.provider, data.response)
                    .then(response => {
                        console.log(response.data)
                        commit('authUser', 
                        {
                            token: response.data.token,
                            id: response.data.id
                        })
                    })
                    .catch(err => {
                        console.log({ err: err })
                    })
            }
        },
        getters:
        {

        }
    })