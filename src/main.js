import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./assets/styles/style.scss";
import { createHead } from '@vueuse/head';

createApp(App).use(store).use(router).use(createHead()).mount('#app')
