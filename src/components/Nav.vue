<template>
    <div>
        <nav>
            <router-link to="/">
                <div class="navigation-logo">
                    Twitter Clone
                </div>        
            </router-link>

            <div class="navigation-user" v-if="user">
                {{ user.username }}
            </div>
        </nav>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Nav',
  setup() {
    const store = useStore();
    const user = computed(() => {
      return store.state.User.user
    })

    return {
      user
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: #eb7434;
    color: #fff;

    .navigation-logo {
      font-weight: bold;
      font-size: 32;
      color: #fff;
    }
    .navigation-user {
      font-weight: bold;
    }
  }
</style>