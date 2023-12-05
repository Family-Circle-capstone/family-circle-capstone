import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import Admin from './components/pages/Admin.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/admin', component: Admin },
        // { path: '/video', component: Video }
    ]
})

const app = createApp(App);
app.use(router);

app.mount('#app');

// createApp(App).mount('#app')
