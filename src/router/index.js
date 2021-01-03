import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import { users } from '../assets/users'
import Home from '../views/Home';
import UserProfile from '../views/UserProfile';
import Admin from '../views/Admin';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.state.User.user;


  if (!user) {
    store.dispatch('User/commitUser', users[0]);
  }

  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin &&  !isAdmin) next({ name: 'Home' })
  else next();
})

export default router
