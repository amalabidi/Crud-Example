import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Edit from './components/Edit.vue';
import Create from './components/Create.vue';
import Index from './components/Index.vue';

import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);





const routes = [
    {name: 'Create', path:'/create',component: Create},
  {name : 'Edit' , path:'/edit' , component: Edit},
  {name : 'Index',path:'/index' , component: Index}


];


const router = new VueRouter({routes});
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  router,
  render: h => h(App)

}).$mount('#app');
