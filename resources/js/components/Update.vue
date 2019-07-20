<template>
    <div :class="{ 'update' : isShowRoute }">
        <div class="post" v-if="fetchedUpdate">
            <div class="left">
                <img src="/img/brand_logo.png" alt="">
                <b-button class="adv-btn small-btn adv-edit" :to="{name: 'updates.edit', params: {id: fetchedUpdate.id}}">
                    <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
                    
                </b-button
                ><b-form @submit.prevent="destroyUpdate">
                    <b-button type="submit" class="adv-btn small-btn adv-delete">
                        <font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon>
                        
                    </b-button>
                </b-form>
            </div
            ><div class="right">
                <div class="post-header mt-4">
                    <div class="left">
                        <h2>{{ fetchedUpdate.title }}</h2>
                        <div class="author">
                            <p>
                                Posted by VampY 
                            </p>
                        </div>
                    </div
                    ><div class="right">
                        <div class="date">{{ fetchedUpdate.created_date }}</div>
                        <div class="views-count">
                            {{ fetchedUpdate.views }}
                            <font-awesome-icon :icon="['far', 'eye']" class="ml-1"></font-awesome-icon>
                        </div>
                    </div>
                </div>
                <div class="post-body mt-4">
                    <p>{{ body }}</p>                    
                </div>
                <div class="post-footer mt-3">
                    <div class="left">
                        <b-link v-if="!isShowRoute" :to="{name: 'updates.show', params: {id: fetchedUpdate.id}}" class="adv-link">Continue Reading</b-link>
                    </div
                    ><div class="right">
                        <div class="likes">
                            <div>{{ fetchedUpdate.likes }}</div> <font-awesome-icon :icon="['far', 'heart']" class="ml-1"></font-awesome-icon>
                        </div>
                        <div class="share">
                            <font-awesome-icon :icon="['far', 'share-square']" class="ml-2"></font-awesome-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['update'],
    data(){return{
        id: this.$route.params.id,
        fetchedUpdate: null
    }},
    computed:
    {
        isShowRoute() {return this.$route.name === 'updates.show'},
        body() {return this.fetchedUpdate.body.length < 250 ? this.fetchedUpdate.body : (this.isShowRoute ? this.fetchedUpdate.body : this.fetchedUpdate.body.substring(0,250) + "...")}
    },
    mounted()
    {
        if(this.id) this.fetch();
        else {this.fetchedUpdate = this.update}
    },
    methods:
    {
        fetch()
        {
            axios.get('/updates/' + this.id )
            .then(({data}) =>
            {
                this.fetchedUpdate = data;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .update 
    {
        padding: 150px 0;
    }
    
    .hr-lg {width: 880px;}
    .post
    {
        width: 800px;
        margin: auto;
        > .left
        {
            width: 20%;
            display: inline-block;
            text-align: center;
            img
            {
                width: 100px;
                height: 100px;
                background: black;;
                outline: 2px solid black;
                border: 4px solid #FFD700;
                margin: 25px auto;
                padding: 10px;
                display: block;
            }
            a, form 
            {
                display: inline-block;
                margin: 0 5px;
            }
        }
        > .right
        {
            width: 80%;
            display: inline-block;
            vertical-align: top;
        }
    }
    .post-header
    {
        color: white;
        > .left
        {
            width: 80%;
            display: inline-block;
            h2
            {
                font: 1.75rem 'Ruboto Condensed', sans-serif;
            }
        }
        .author
        {
            p 
            {
                margin: 0;
                color: lightgray;
            }
        }
        > .right
        {
            width: 20%;
            display: inline-block;
            vertical-align: top;
            text-align: right;
            .date {color: lightgray;}
            .views-count {font-size: 1.1rem}
        }
    }
    .post-body
    {
        color: lightgray;
        font: 1rem Nunito, sans-serif;
        line-height: 1.5;
    }
    .post-footer
    {
        .left
        {
            width: 25%;
            display: inline-block;
            
        }
        .right
        {
            width: 75%;
            display: inline-block;
            vertical-align: top;
            text-align: right;
            color: white;
            font-size: 1;
            div {display: inline-block;}
            > div 
            {
                margin: 0 5px; 
                &:hover {cursor: pointer;}
            }
            > div * {vertical-align: middle;}
            svg {font-size: 1.2rem}
            .likes {color: #ec4853}
            .share {color: #3CB1B6;}
        }
    }
</style>
