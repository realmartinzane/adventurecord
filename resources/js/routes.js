import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
import HomePage from './pages/Home.vue';

let routes =
    [
        {
            path: '/',
            name: 'home',
            component: HomePage
        }
    ]

export default new VueRouter({
    routes
})