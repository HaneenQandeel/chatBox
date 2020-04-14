import Vue from 'vue';
import Router from 'vue-router';
import VLogin from '@/components/VLogin';
import Register from '@/components/Register';
import ChatBox from '@/components/ChatBox';

Vue.use(Router);

let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'home',
      component: ChatBox,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      component: VLogin,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
  ]
});



export default router;