/*
  Adds the promise polyfill for IE 11
*/
require('es6-promise').polyfill();

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { updates } from './modules/updates.js'

export default new Vuex.Store({
    modules: 
    {
        updates
    }
});