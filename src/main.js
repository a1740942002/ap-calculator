import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { create, NButton } from 'naive-ui';

const naive = create({
  components: [NButton],
});

createApp(App).use(store).use(router).use(naive).mount('#app');
