<template>
    <div>
        <form class="form" @submit.prevent="createNewTweet" :class="{ 'exceeded': newTweetCharacterCount > 180 }">
          <label>New Tweet ({{ newTweetCharacterCount }}/180)</label>
          <textarea id="newTweet" rows="12" v-model="newTweetContent"></textarea>
          <div class="tweet-type">
            <label for="newTweetType">Type: </label>
            <select id="newTweetType" v-model="selectedTweetType">
              <option 
                :value="option.value" 
                v-for="(option, index) in tweetTypes" 
                :key="index">
                {{ option.name }}
              </option>
            </select>
          </div>
          <button class="btn-tweet">
            Tweet
          </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CreateTweetPanel",
    data() {
        return {
            newTweetContent: '',
            selectedTweetType: 'instant',
            tweetTypes: [
                    { value: 'draft', name: 'Draft' },
                    { value: 'instant', name: 'Instant Tweet' }
                ]      
            }
        },
    computed: {
        newTweetCharacterCount() {
            return this.newTweetContent.length;
        }
    },
    methods: {
        createNewTweet() {
            if (this.newTweetContent && this.selectedTweetType !== 'draft') {
                this.$emit('add-tweet', this.newTweetContent)
                this.newTweetContent = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .form {
        display: flex;
        margin-top: 5px;
        flex-direction: column;
        border-top: 1px solid #dfe3e8;
        padding-top: 20px;
        gap: 16px;

        &.exceeded {
          color: red;
          border-color: red;
        }

        .btn-tweet {
          text-align: center;
          background-color: #eb7434;
          color: #fff;
          border: none;
          border-radius: 20px;
          padding: 5px 5px;
      }
    }
</style>