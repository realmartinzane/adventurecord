/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Cxlt Toastr
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
const toastrConfigs = {
    closeButton: true,
    progressBar: true,
    position: 'bottom right',
    showMethod: 'lightSpeedIn',
    hideMethod: 'lightSpeedOut',
    showDuration: 300,
    hideDuration: 300,
    timeOut: 4400

}
Vue.use(CxltToastr, toastrConfigs)

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEye, faComment, faShareSquare} from '@fortawesome/free-regular-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDiscord, faEye, faHeart, faComment, faShareSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue Router
import router from './routes'

// App
import MyApp from './App.vue'

const app = new Vue({
    el: '#app',
    router,
    components:
    {
        MyApp
    }
});
