import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homepage.vue';
import Login from '../views/login.vue';
import SignUp from '../views/signup.vue';
import NProgress from 'nprogress';

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
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
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
