<template>
    <div class="tweet-item" @click="favoriteTweet(tweet.id)">
        <div class="tweet-username">
            @{{ username }}
        </div>
        <div class="tweet-content">
            {{ tweet.content }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TweetItem',
    props: {
        username: {
            type: String,
            required: true
        },
        tweet: {
            type: Object,
            required: true
        }
    },
    methods: {
        favoriteTweet(id){
            this.$emit('favorite', id)
        }
    }
}
</script>

<style lang="scss" scoped>
.tweet-item {
    padding: 20px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    cursor: pointer;
    transition: all .25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .tweet-username {
    font-weight: bold;
    padding: 5px 0;
    }
}
</style>