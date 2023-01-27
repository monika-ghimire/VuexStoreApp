<script>
import BuilDer from './pages/builDer.vue';
import CouRse from './pages/CouRse.vue';
import OverView from './pages/OverView.vue';

export default {
  components: { OverView, CouRse, BuilDer },
  
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      current_selected:'Courses overView',
      current_number:1
    };
  },
  
  methods: {
     
 
  
    handleSelect(key) {
      if (key === "1") {
        this.current_selected='Courses overView'
        this.current_number=1

      }
      if (key === "2") {
        this.current_selected='Courses';
        this.current_number=2
     
      }
      if (key === "3") {
        this.current_selected="Courses builder";
        this.current_number=3
        
      }

     
    },

   

   
  },
  


};
</script>

<template>
  <div id="app">
    <div class="p-10">
      <p>DashBord / {{current_selected }}</p>
    </div>
    <section>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" >
        <!-- <OverView /> -->
        <!-- <CouRse/> -->
          <div class="a font-bold" >
              Learning Portal Overview 
          </div>
        </el-menu-item>

        <el-menu-item index="2">
          <div class="a font-bold" >
            Courses
          </div>
        </el-menu-item>

        <el-menu-item index="3">
          <div class="a font-bold">
            Email Template Builder
          </div>
        </el-menu-item>
      </el-menu>
    </section>
   
   


    <div v-if="current_number===1 ">
      <OverView/>
    </div>
    <div  v-if="current_number===2 ">
      <CouRse />

    </div>
    <div  v-if="current_number===3 ">
      <BuilDer/>

    </div>
  </div>
</template>

<style scoped>
.a:hover {
  color: #4d74b1;
}
.a {
  font-size: 0.9em;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .a {
    font-size: 0.7em;
  }
}
</style>
