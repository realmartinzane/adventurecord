/*
  Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill();

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { updates } from './modules/updates.js'
import { users } from './modules/users.js'
import { products } from './modules/products.js'
import { commands } from './modules/commands.js'

export default new Vuex.Store({
    modules: 
    {
        updates,
        users,
        products,
        commands,
    }
});