<script>


</script>

<template>
  <div id="app">

    <div class="p-10">
      <p>DashBord /  Learing</p>
    </div>
    <section>
    <div class="flex flex-row gap-10  p-10  pb-1  font-semibold border-y">
      
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .a{
    font-size: 0.7em;
  }
}



</style>
