import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
import HomePage from './pages/Home.vue';
import UpdatesComponent from './components/Updates.vue';

let routes =
    [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/updates',
            name: 'updates',
            component: UpdatesComponent
        }
    ]

export default new VueRouter({
    routes
})