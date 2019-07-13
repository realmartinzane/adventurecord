/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faEye, faComment, faShareSquare} from '@fortawesome/free-regular-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDiscord, faEye, faHeart, faComment, faShareSquare)



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('navigation-bar-component', require('./components/NavigationBar.vue').default);
Vue.component('navigation-bar-two-component', require('./components/NavigationBarTwo.vue').default);
Vue.component('landing-component', require('./components/Landing.vue').default);
Vue.component('landing-two-component', require('./components/LandingTwo.vue').default);
Vue.component('updates-component', require('./components/Updates.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
