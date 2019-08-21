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

        },
        actions:
        {
            login({commit}, data)
            {
                axios.post('/sociallogin/' + data.provider, data.response)
                    .then(response => {
                        console.log(response.data)
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