<template>
  <div class="user-profile">
    <div class="user-panel">
        <h1 class="">@{{ state.user.username }}</h1>
        <div class="admin-badge" v-if="state.user.isAdmin">
            Admin {{ userId }}
        </div>
        <div class="follower-count">
            <strong>Followers: 50</strong>
            <!-- <button class="btn-follow" @click="followUser">Follow</button> -->
        </div>
        <CreateNewTweet @add-tweet="addTweet"></CreateNewTweet>
    </div>
    <div class="tweets-wrapper">
        <TweetItem 
            v-for="tweet in state.user.tweets" 
            :key="tweet.id" 
            :username="state.user.username" 
            :tweet="tweet"
            @favorite="toggleFavorite">
        </TweetItem>
    </div>
  </div>
</template>

<script>
// import {  } from 'vue-router';
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users';
import TweetItem from '../components/TweetItem';
import CreateNewTweet from '../components/CreateNewTweet';

export default {
  name: 'UserProfile',
  components: {
    TweetItem,
    CreateNewTweet
  },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId)

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1]
    })

    function addTweet(tweet) {
      state.user.tweets.unshift({
      id: state.user.tweets.length + 1,
      content: tweet
      })
    }
    function toggleFavorite(id) {
      console.log(`favourited tweet ${id}`);
    }

    return {
      state,
      addTweet,
      toggleFavorite,
      userId
    }
  }
    // name: 'UserProfile',
    // components: {
    //   TweetItem,
    //   CreateNewTweet
    // },
    // data() {
    //   return {
    //     route: this.$route,
    //     user: users[this.userId - 1]
    //   }
    // },
    // computed: {
    //   fullName() {
    //     return `${this.user.firstName} ${this.user.lastName}`;
    //   },
    //   userId() {
    //     return this.route.params.userId
    //   }
    // },
    // methods: {
    //   // followUser() {
    //   //   this.followers++
    //   // },
      // toggleFavorite(id) {
      //   console.log(`favourited tweet ${id}`);
      // },
    //   addTweet(tweet) {
    //     this.user.tweets.unshift({
    //       id: this.user.tweets.length + 1,
    //       content: tweet
    //     }) 
    //   }
    // mounted() {
    //   this.followUser();
    // }
    // watch: {
    //   followers(newFollowerCount, oldFollowerCount) {
    //     if (oldFollowerCount < newFollowerCount) {
    //       console.log(`${this.user.username} has gained a new follower`);
    //     }
    //   }
    // }
  // }
}
</script>

<style lang="scss" scoped>

.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;

    .user-panel {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #dfe3e8;

      .admin-badge {
        background-color: #eb4034;
        color: #fff;
        border-radius: 5px;
        margin: 20px auto 20px 0;
        font-weight: bold;
        padding: 5px 10px;
    }
      .follower-count {
        display: flex;
        justify-content: space-between;

        .btn-follow {
          background-color: #eb7434;
          color: #fff;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
      }
        .btn-follow:hover {
          opacity: .9;
          cursor: pointer;
      }
    }
  }
}

</style>
