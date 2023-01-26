import Vue from "vue";
import Vuex, { Store } from "vuex";

import course from "./store/course";

Vue.use(Vuex);

export default new Store({
    modules:{
     
        course,
    

             }
})