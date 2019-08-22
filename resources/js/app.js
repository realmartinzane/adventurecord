/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

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

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faFacebook, faLine, faLinkedin, faOdnoklassniki, faReddit, faSkype, faTelegram,
         faTwitter, faVk, faWeibo, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEye, faComment, faShareSquare, faEdit, faEnvelope, faComments, faGem, faClock} from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt, faBars, faCog, faCoins, faCampground, faSignal, faSearch, faTimes, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDiscord, faEye, faHeart, faComment, faShareSquare, faEdit, faTrashAlt,
            faFacebook, faLine, faLinkedin, faOdnoklassniki, faReddit, faSkype, faTelegram, 
            faTwitter, faVk, faWeibo, faWhatsapp, faEnvelope, faComments, faBars, faCog, faCoins, 
            faGem, faCampground, faSignal, faClock, faSearch, faTimes, faCaretDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue Router
import router from './routes'

// VueX
import store from './store'

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
