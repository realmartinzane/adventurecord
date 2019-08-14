<template>
    <section class="section-commands">
        <header class="u-center-text u-margin-bottom-lg">
            <h2 class="heading-secondary">Commands</h2>
        </header>

        <div class="commands">
            <input type="radio" name="tabs" id="btn_1" checked="checked" class="commands__radio">
            <label for="btn_1" class="commands__button">General</label>
            
            <input type="radio" name="tabs" id="btn_2" class="commands__radio">
            <label for="btn_2" class="commands__button">Marketplace &amp; Guilds</label>
            
            <input type="radio" name="tabs" id="btn_3" class="commands__radio">
            <label for="btn_3" class="commands__button">Voting &amp; Friends</label>
            
            <input type="radio" name="tabs" id="btn_4" class="commands__radio">
            <label for="btn_4" class="commands__button">Leaderboards &amp; Statistics</label>

            <div class="commands__info-box">
                The prefix for AdventureCord is ! and is not interchangeable. The following is a list of all the available commands:
            </div>

            <div class="commands__tab" id="tab_1">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="(item, index) in listOne" :key="index">
                        <td class="commands__column commands__column--command">{{ item.command }}</td>
                        <td class="commands__column commands__column--function">{{ item.function }}</td>
                    </tr>
                </table>
            </div>

            <div class="commands__tab" id="tab_2">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="(item, index) in listTwo" :key="index">
                        <td class="commands__column commands__column--command">{{ item.command }}</td>
                        <td class="commands__column commands__column--function">{{ item.function }}</td>
                    </tr>
                </table>
            </div>

            <div class="commands__tab" id="tab_3">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="(item, index) in listThree" :key="index">
                        <td class="commands__column commands__column--command">{{ item.command }}</td>
                        <td class="commands__column commands__column--function">{{ item.function }}</td>
                    </tr>
                </table>
            </div>

            <div class="commands__tab" id="tab_4">
                <table class="commands__table">
                    <tr class="commands__row commands__row--first">
                        <th class="commands__column commands__column--command">Command</th>
                        <th class="commands__column commands__column--function">Function</th>
                    </tr>

                    <tr class="commands__row" v-for="(item, index) in listFour" :key="index">
                        <td class="commands__column commands__column--command">{{ item.command }}</td>
                        <td class="commands__column commands__column--function">{{ item.function }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){return{
        listOne: 
        [
            {command: '!tutorial ', function: 'Starts the tutorial.'},
            {command: '!start', function: 'Prompts a class choice to create your character, choose a class by clicking on one of the corresponding reactions.'},
            {command: '!profile or !profile [user mention] (!p)', function: 'View your or the mentioned user\'s character profile.'},
            {command: '!explore', function: 'Encounter mobs for exp and items.'},
            {command: '!travel', function: 'Shows the different locations to travel to for harder mobs and adventures. Click on the reaction below to travel to the location.'},
            {command: '!inventory or !inventory [user mention] (!i)', function: 'View your or the mentioned user\'s collection of items.'},
            {command: '!itemsearch [item name] (!is)', function: 'Searches for an item in the game and shows you its information.'},
            {command: '!equip [item name]', function: 'Makes your character equip the item, if it meets the requirements.'},
            {command: '!daily', function: 'Claim your daily gold and gems.'},
            {command: '!achievements', function: 'Displays or updates your achievements.'},
            {command: '!online', function: 'Shows how many players have'},
            {command: '!changeclass', function: 'Change your character class for 1000 gems.'},
            {command: '!support', function: 'Creates a link to the support discord server.'},
            {command: '!invite', function: 'Provides a link to the bot invite.'},
            {command: '!wiki', function: 'Provides links to the game wikipedia.'},
            {command: '!help', function: 'Shows you a list of all the commands.'},
            {command: '!moblogs (Members only)', function: 'Shows stats on the top 10 mobs you\'ve killed.'},
        ],
        listTwo:
        [
            {command: '!buy or !buy [item name]', function: 'Allows you to buy an item from the marketplace; if no item name was specified, your next message will be interpreted as the item to buy.'},
            {command: '!sell', function: 'Allows you to put an item up for sale. Requires you to be level 50+, the minimum possible price is 10 gold.'},
            {command: '!marketplace (!mp)', function: 'Shows a list of the items you are selling.'},
            {command: '!dismantle [amount] [item name]', function: 'Dismantles items in exchange for gold. This process is not instantaneous and you can only dismantle three different items at a time (amount does not matter) (10 if you have bought membership).'},
            {command: '!dismantleprocess', function: 'Shows how many items are being dismantled and how much gold you have already recieved.'},
            {command: '!createguild', function: 'Creates a guild.'},
            {command: '!joinguild [guild name]', function: 'Allows you to join a guild if it has free slots.'},
            {command: '!leaveguild', function: 'Allows you to leave your current guild.'},
            {command: '!topguilds', function: 'Shows a list of all guilds in order of total experience.'},
            {command: '!guildinfo', function: 'Displays information about your guild (WIP)'},
            {command: '!guildmembers', function: 'Shows a list of all members of your guild in order of experience.'},
            {command: '!guildsettings', function: 'Allows you to adjust your guild\'s settings if you have permission.'},
            {command: '!guilduserkick [user ID]', function: 'Kicks the user you specified from your guild. Be aware that the ID used is unique to AdventureCord.'},
            {command: '!nation', function: 'Shows you information about your nation or allows you to join one if you have not done so already.'},
        ],
        listThree:
        [
            {command: '!vote', function: 'Provides links to voting sites or activates unclaimed votes.'},
            {command: '!rewards', function: 'Claims Voting Milestones.'},
            {command: '!claim', function: 'Activates unclaimed votes.'},
            {command: '!event or !event [event name]', function: 'Lists current events or provides a description of the specified event.'},
            {command: '!purchase or !purchase [serial key]', function: 'Provides a link to the online shop or activates a purchase.'},
            {command: '!friendadd [user mention]', function: 'Adds a user to your friend list.'},
            {command: '!friendlist', function: 'Displays a list of your friends.'},
        ],
        listFour:
        [
            {command: '!leaderboard (!lb)', function: 'Shows the global leaderboard of users with the most experience.'},
            {command: '!lbgold (!top100gold)', function: 'Shows the global leaderboard of the users with the most gold.'},
            {command: '!topguilds (!lb)', function: 'Shows a list of all guilds in order of total experience.'},
            {command: '!online', function: 'Shows how many people have used which areas of AdventureCord in the last 10 minutes.'},
        ]
    }}
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
