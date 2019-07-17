import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
import HomePage from './pages/Home.vue';
import UpdatesComponent from './components/Updates.vue';
import UpdateComponent from './components/Update.vue';
import UpdateForm from './components/UpdateForm.vue';

let routes =
    [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/updates',
            name: 'updates.index',
            component: UpdatesComponent
        },
        {
            path: '/updates/create',
            name: 'updates.create',
            component: UpdateForm
        },
        {
            path: '/updates/:id',
            name: 'updates.show',
            component: UpdateComponent
        }
    ]

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) 
    {
        return { x: 0, y: 0 }
    }
})