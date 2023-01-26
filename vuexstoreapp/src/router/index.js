// import { createRouter,createWebHistory } from "vue-router";

import vueRouter from "vue-router";
import Vue from "vue";
import  Viewes from '../pages/OverView.vue';
import builDer from'../pages/builDer.vue';
import Course from "../pages/CouRse.vue";

const routes=[
    {
        path:'/',
        name:'overview',
        component:Viewes
    },
   
    {
        path:'/course',
        name:'course',
        component:Course 
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