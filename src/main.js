import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import Store from './store/Store';

import '../node_modules/nprogress/nprogress.css';

const app = createApp(App);
app.use(router);
app.use(Store);
app.config.devtools = true;
app.mount('#app');

// Before you create app
// app.config.devtools = process.env.NODE_ENV === 'development';
