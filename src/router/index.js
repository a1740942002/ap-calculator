import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Login from '@/views/login.vue';
import SignUp from '@/views/signup.vue';
import NProgress from 'nprogress';
import { useAuth } from '@/hooks/useAuth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from) => {
      const { isLogin } = useAuth();
      if (isLogin.value) return { name: 'Home' };
      return true;
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: (to, from) => {
      const { isLogin } = useAuth();
      if (isLogin.value) return { name: 'Home' };
      return true;
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  NProgress.start();
  return true;
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
