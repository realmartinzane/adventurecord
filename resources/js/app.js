window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 // Vue
import Vue from 'vue'

// Vuex Store
import store from './store.js'

// Vue Authenticate
import VueAxios from 'vue-axios'
import VueSocialauth from 'vue-social-auth'
import axios from 'axios';
Vue.use(VueAxios, axios)
Vue.use(VueSocialauth, 
{
    providers: 
    {
        discord: 
        {
            name: 'discord',
            url: '/login/discord',
            clientId: '600598691857825792',
            authorizationEndpoint: 'https://discordapp.com/api/oauth2/authorize',
            redirectUri: 'http://adventurecord.test/login/discord/callback',
            requiredUrlParams: ['display', 'scope'],
            scope: ['identify', 'guilds'],
            scopeDelimiter: ' ',
            display: 'basic',
            oauthType: '2.0',
        }
    }
});

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

// Vue Carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// Vue Social Sharing
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

// Vue Tooltip
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faFacebook, faLine, faLinkedin, faOdnoklassniki, faReddit, faSkype, faTelegram,
         faTwitter, faVk, faWeibo, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEye, faComment, faShareSquare, faEdit, faEnvelope, faComments, faGem, faClock} from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt, faBars, faCog, faCoins, faCampground, faSignal, faSearch, faTimes, faCaretDown, faBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDiscord, faEye, faHeart, faComment, faShareSquare, faEdit, faTrashAlt,
            faFacebook, faLine, faLinkedin, faOdnoklassniki, faReddit, faSkype, faTelegram, 
            faTwitter, faVk, faWeibo, faWhatsapp, faEnvelope, faComments, faBars, faCog, faCoins, 
            faGem, faCampground, faSignal, faClock, faSearch, faTimes, faCaretDown, faBolt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue Router
import router from './routes'

// App
import MyApp from './App.vue'

const app = new Vue({
    el: '#app',
    router,
    store,
    components:
    {
        MyApp
    }
});
