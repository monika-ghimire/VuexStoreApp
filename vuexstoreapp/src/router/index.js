// import { createRouter,createWebHistory } from "vue-router";

import vueRouter from "vue-router";
import Vue from "vue";
import Courses from '../component/courSes.vue';
import  Viewes from '../component/overView.vue';
import builDer from'../component/builDer.vue';

const routes=[
    {
        path:'/',
        name:'overview',
        component:Viewes
    },
   
    {
        path:'/course',
        name:'course',
        component:Courses
    },
    {
        path:'/builder',
        name:'builder',
        component:builDer
    },
  

]


// const router =createRouter({
//     history:createWebHistory(),
//     routes
// })
// export default router

Vue.use(vueRouter);
const router = new vueRouter({
  mode: "history",
  routes,
});

export default router;