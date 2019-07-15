import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
import HomePage from './pages/Home.vue';
import UpdatesComponent from './components/Updates.vue';
import UpdateComponent from './components/Update.vue';

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
        },
        {
            path: '/update',
            name: 'update',
            component: UpdateComponent
        }
    ]

export default new VueRouter({
    routes
})