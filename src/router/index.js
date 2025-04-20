// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PageOne from '../views/PageOne.vue';
import PageTwo from '../views/PageTwo.vue';
import PageThree from '../views/PageThree.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  { path: '/', rediect:'../views/HelloWorld.vue' },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/PageOne', component: PageOne },
  { path: '/PageTwo', component: PageTwo },
  { path: '/PageThree', component: PageThree },
  // 其他页面...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;