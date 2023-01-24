<script>


</script>

<template>
  <div id="app">

    <div class="p-10">
      <p>DashBord /  Learing</p>
    </div>
    <section>
    <div class="flex flex-row gap-10  p-10 font-bold pb-1 border-y">
      
      <div class="a">
        <router-link to='/'>
          Learning Portal Overview</router-link>
      </div>
      <div class="a">

        <router-link to='/Course'>
          Courses</router-link>
      </div>
      <div class="a">

        <router-link to='/builder'>
          Email Template Builder</router-link>
      </div>

    </div>
  </section>

  <router-view />
  </div>
  

</template>


<style scoped>



</style>
