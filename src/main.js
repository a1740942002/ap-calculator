import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/tailwind.css';

import {
  create,
  NButton,
  NBackTop,
  NInputNumber,
  NSpace,
  NSelect,
  NAlert,
  NDivider,
  NCard,
  NTabs,
  NTabPane,
  NFormItem,
  NForm,
  NFormItemRow,
  NNotificationProvider,
} from 'naive-ui';

const naive = create({
  components: [
    NButton,
    NBackTop,
    NInputNumber,
    NSpace,
    NSelect,
    NAlert,
    NDivider,
    NCard,
    NTabs,
    NTabPane,
    NFormItem,
    NForm,
    NFormItemRow,
    NNotificationProvider,
  ],
});

createApp(App).use(store).use(router).use(naive).mount('#app');
