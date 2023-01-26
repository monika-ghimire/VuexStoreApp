<script>

export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
              
          //  if(key===1){
          //   console.log(' Courses Learning ')
          //  }
          //   if (key===1){
          //   console.log('Courses')
          //  }

      
      }
    }
    

    
  }


</script>

<template>
  <div id="app">
    <div class="p-10">
      <p>DashBord / course</p>
    </div>
    <section>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <div class="a font-bold">
            <router-link to="/" > Learning Portal Overview</router-link>
          </div>
        </el-menu-item>

        <el-menu-item index="2">
          <div class="a font-bold">
            <router-link to="/Course"> Courses</router-link>
          </div>
        </el-menu-item>

        <el-menu-item index="3">
          <div class="a font-bold">
            <router-link to="/builder"> Email Template Builder</router-link>
          </div>
        </el-menu-item>
      </el-menu>

    </section>

    <router-view />
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
