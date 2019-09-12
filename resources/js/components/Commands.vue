<template>
    <section class="section-commands">
        <secondary-header-component v-if="commandsLoad == 2">Commands</secondary-header-component>
        <clip-loader v-if=" commandsLoad !== 2" :loading="true" color="#FFD700" size="5rem"></clip-loader>

        <div class="commands" v-if="commandsLoad == 2">
            <input type="radio" name="tabs" id="btn_1" checked="checked" class="commands__radio">
            <label for="btn_1" class="commands__button" @click="filterCommands(1)">General</label>
            
            <input type="radio" name="tabs" id="btn_2" class="commands__radio">
            <label for="btn_2" class="commands__button" @click="filterCommands(2)">Marketplace &amp; Guilds</label>
            
            <input type="radio" name="tabs" id="btn_3" class="commands__radio">
            <label for="btn_3" class="commands__button" @click="filterCommands(3)">Voting &amp; Friends</label>
            
            <input type="radio" name="tabs" id="btn_4" class="commands__radio">
            <label for="btn_4" class="commands__button" @click="filterCommands(4)">Leaderboards &amp; Statistics</label>

            <div class="commands__info-box">
                The prefix for AdventureCord is ! and is not interchangeable. The following is a list of all the available commands:
            </div>

            <div class="commands__tab" id="tab_1">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="command in filteredCommands" :key="command.id">
                        <td class="commands__column commands__column--command">{{ command.name }}</td>
                        <td class="commands__column commands__column--function">{{ command.function }}</td>
                    </tr>
                </table>
            </div>

            <div class="commands__tab" id="tab_2">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="command in filteredCommands" :key="command.id">
                        <td class="commands__column commands__column--command">{{ command.name }}</td>
                        <td class="commands__column commands__column--function">{{ command.function }}</td>
                    </tr>
                </table>
            </div>

            <div class="commands__tab" id="tab_3">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="command in filteredCommands" :key="command.id">
                        <td class="commands__column commands__column--command">{{ command.name }}</td>
                        <td class="commands__column commands__column--function">{{ command.function }}</td>
                    </tr>
                </table>
            </div>

            <div class="commands__tab" id="tab_4">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="command in filteredCommands" :key="command.id">
                        <td class="commands__column commands__column--command">{{ command.name }}</td>
                        <td class="commands__column commands__column--function">{{ command.function }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

import SecondaryHeaderComponent from './common/SecondaryHeader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    components: {SecondaryHeaderComponent, ClipLoader},
    data(){return{
        filteredCommands: null
    }},

    computed:
    {
        commands() {return this.$store.getters.getCommands},

        commandsLoad() {return this.$store.getters.getCommandsLoad}
    },

    created()
    {
        this.fetchCommands();
    },

    methods: 
    {
        filterCommands(id)
        {
            this.filteredCommands = this.commands.filter(product => product.command_category_id == id)
        },
        
        async fetchCommands()
        {
            await this.$store.dispatch('fetchCommands')
            this.filterCommands(1);
        }
    }
}
</script>

<style lang="scss">

@import '../../sass/abstracts/_variables.scss';

    .commands
    {
        &__radio
        {
            display: none;
        }

        &__button
        {
            display: inline-block;
            color: $color-white;
            padding: 1rem 4rem;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            cursor: pointer;
            position: relative;
            z-index: 5000;
        }

        &__radio:checked + &__button
        {
            color: $color-secondary;
            background-color: $color-primary;
        }
        
        &__info-box
        {
            padding: 1rem 0;
            border-top: 1px solid $color-primary;
        }
        
        &__tab
        {
            display: none;
        }

        #btn_1:checked ~ #tab_1
        {
            display: block;
        }

        #btn_2:checked ~ #tab_2
        {
            display: block;
        }
        
        #btn_3:checked ~ #tab_3
        {
            display: block;
        }
        
        #btn_4:checked ~ #tab_4
        {
            display: block;
        }

        &__table
        {
            width: 100%;
            border-top: 2px solid $color-border-light;
            border-bottom: 2px solid $color-border-light;
            text-align: left;
            border-collapse: collapse
        }

        &__row
        {
            font-weight: normal;
            border-bottom: 1px solid $color-border-light;
        }

        &__row--first
        {
            border-bottom: 2px solid $color-border-light;
            font-weight: bold;
            .commands__column {color: $color-white;}
        }

        &__column
        {
            padding: .8rem 1.5rem;
        }
        
        &__column--command
        {
            width: 30%;
            color: $color-primary;
        }

        &__column--function
        {
            width: 69%;
        }
    }

</style>
