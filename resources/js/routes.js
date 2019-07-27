import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
import LandingComponent from './components/Landing.vue';
import UpdatesComponent from './components/Updates.vue';
import UpdateComponent from './components/Update.vue';
import UpdateFormComponent from './components/UpdateForm.vue';
import CommandsComponent from './components/Commands.vue';
import UserComponent from './components/User.vue';
import UserSettingsComponent from './components/UserSettings.vue';
import MarketplaceComponent from './components/Marketplace.vue';

let routes =
    [
        {
            path: '/',
            name: 'home',
            component: LandingComponent
        },
        {
            path: '/updates',
            name: 'updates.index',
            component: UpdatesComponent
        },
        {
            path: '/updates/create',
            name: 'updates.create',
            component: UpdateFormComponent
        },
        {
            path: '/updates/:id',
            name: 'updates.show',
            component: UpdateComponent
        },
        {
            path: '/updates/:id/edit',
            name: 'updates.edit',
            component: UpdateFormComponent
        },
        {
            path: '/commands',
            name: 'commands',
            component: CommandsComponent
        },
        {
            path: '/user',
            name: 'users.show',
            component: UserComponent
        },
        {
            path: '/user/settings',
            name: 'users.settings',
            component: UserSettingsComponent
        },
        {
            path: '/marketplace',
            name: 'marketplace',
            component: MarketplaceComponent
        }
    ]

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) 
    {
        return { x: 0, y: 0 }
    }
})