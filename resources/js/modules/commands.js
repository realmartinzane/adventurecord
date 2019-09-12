import CommandAPI from '../api/command.js';
import VueRouter from 'vue-router';

export const commands = {
    state: 
    {
        commands: [],
        commandsLoad: 0 
    },

    mutations: 
    {
        setCommands(state, data) 
        {
            state.commands = data
        },

        setCommandsLoad(state, status) 
        {
            state.commandsLoad = status
        },
    },

    actions: 
    {
        async fetchCommands({commit})
        {
            commit('setCommandsLoad', 1)
            let response;
            try 
            {
                response = await CommandAPI.fetchAll()
            }
            catch($ex) 
            {
                commit('setCommands', [])
                commit('setCommandsLoad', 3)
            }
            commit('setCommands', response.data)
            commit('setCommandsLoad', 2)
        },
    },

    getters: 
    {
        getCommands(state) 
        {
            return state.commands
        },

        getCommandsLoad(state) 
        {
            return state.commandsLoad
        },
    }
}