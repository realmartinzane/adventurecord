import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)

import HomeView from './views/Home.vue'
import UpdatesView from './views/Updates.vue'
import UpdateView from './views/Update.vue'
import UpdatesFormView from './views/UpdatesForm.vue'
import CommandsView from './views/Commands.vue'
import MarketplaceView from './views/Marketplace.vue'
import UserView from './views/User.vue';
import UserSettingsView from './views/UserSettings.vue';

let routes =
    [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/updates',
            name: 'updates.index',
            component: UpdatesView
        },
        {
            path: '/updates/create',
            name: 'updates.create',
            component: UpdatesFormView
        },
        {
            path: '/updates/:id',
            name: 'updates.show',
            component: UpdateView
        },
        {
            path: '/updates/:id/edit',
            name: 'updates.edit',
            component: UpdatesFormView
        },
        {
            path: '/commands',
            name: 'commands',
            component: CommandsView
        },
        {
            path: '/users/:id',
            name: 'users.show',
            component: UserView
        },
        {
            path: '/users/:id/settings',
            name: 'users.settings',
            component: UserSettingsView
        },
        {
            path: '/marketplace',
            name: 'marketplace',
            component: MarketplaceView
        }
    ]

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) 
    {
        return { x: 0, y: 0 }
    }
})