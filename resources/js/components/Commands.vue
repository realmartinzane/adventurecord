<template>
    <b-row>
        <section-header-component
            :text="'Available Commands'"
            :spacing="true">
        </section-header-component>

        <b-col cols="12" lg="8" offset-lg="2">
            <b-tabs content-class="mt-3" fill>
                <p>The prefix for AdventureCord is ! and is not interchangeable. The following is a list of all the commands:</p>
                <b-tab title="General" active>
                    <b-table striped hover :items="listOne"></b-table>
                </b-tab>
                <b-tab title="Marketplace &amp; Guilds">
                    <b-table striped hover :items="listTwo"></b-table>
                </b-tab>
                <b-tab title="Voting &amp; Friends">
                    <b-table striped hover :items="listThree"></b-table>
                </b-tab>
                <b-tab title="Leaderboards &amp; Statistics">
                    <b-table striped hover :items="listFour"></b-table>
                </b-tab>
            </b-tabs>
        </b-col>
    </b-row>
</template>

<script>

import SectionHeaderComponent from './SectionHeader.vue'

export default {
    components: {SectionHeaderComponent},
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
            {command: '!purchase or !purchase [serial key]', function: 'Provides a link to the online shop or activates a purchase (Example: !purchase FAZSAVHDDF2UNVZLVH7Y12BUU).'},
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

@import '../../sass/_mixins.scss';

    .tabs
    {
        p {color: white}
        margin: 50px auto;
        .nav-tabs {border-bottom: 1px solid #FFD700;}
        .nav-link.active 
        {
            color: black;
            background-color: #FFD700;
            border-color: #FFD700;
        }
        .nav-link 
        {
            @include transition(all 100ms);
            font-size: 1rem;
            font-family: 'Roboto Condensed', sans-serif;
            color: lightgray;
            &:hover {border-color: #FFD700;}
        }
        .table
        {
            th, td {border-color: #3d3d49}
            th {color: white;}
            td:nth-child(1) {color: #FFD700}
            td {color: lightgray}
        }
    }
</style>
