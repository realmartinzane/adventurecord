import VueRouter from 'vue-router';
import Vue from 'vue';
import store from './store.js';
Vue.use(VueRouter)

import HomeView from './views/Home.vue'
import UpdatesView from './views/Updates.vue'
import UpdateView from './views/Update.vue'
import UpdatesFormView from './views/UpdatesForm.vue'
import CommandsView from './views/Commands.vue'
import MarketplaceView from './views/Marketplace.vue'
import UserView from './views/User.vue';
import UserSettingsView from './views/UserSettings.vue';
import ErrorView from './views/Error.vue';

function requireAuth(to, from, next) 
{
    function proceed() 
    {
        if (store.getters.getAuthUserLoad() == 2) 
        {
            if (store.getters.getAuthUser != '') 
                next();
            else 
                next('/401');
        }
    }

    if (store.getters.getAuthUserLoad != 2) 
    {
        store.dispatch('fetchAuthUser');
        store.watch(store.getters.getAuthUserLoad, function () 
        {
            if (store.getters.getAuthUserLoad() == 2) 
                proceed();
        });
    }
    else 
        proceed()
}

let routes =
    [
        {
            path: '/',
            name: 'landing',
            redirect: {name: 'home'},
            component: HomeView
        },
        {
            path: '/home',
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
            component: UpdatesFormView,
            beforeEnter: requireAuth
        },
        {
            path: '/updates/:id',
            name: 'updates.show',
            component: UpdateView
        },
        {
            path: '/updates/:id/edit',
            name: 'updates.edit',
            component: UpdatesFormView,
            beforeEnter: requireAuth
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
            component: UserSettingsView,
            beforeEnter: requireAuth
        },
        {
            path: '/marketplace',
            name: 'marketplace',
            component: MarketplaceView,
            beforeEnter: requireAuth
        },
        {
            path: '/401',
            name: 'error.401',
            component: ErrorView
        },

        // Always last route
        {
            path: '*',
            name: 'error.404',
            component: ErrorView
        }
    ]

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) 
    {
        return { x: 0, y: 0 }
    }
})