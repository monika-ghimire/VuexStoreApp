<style scoped></style>

<template>
  <div>
   
    <section>
      <div class="p-10 pb-5">
        <div class="flex flex-row">
          <div><img src="../assets/Book.jpg" /></div>
          <div><h3 class="font-bold">Learning Portal Overview</h3></div>
        </div>
        <p class="font-semibold">
          Manage the data of all the application in a easy way.
        </p>
      </div>
    </section>

    <section>
        <overViewCourses  />
     

      <div class="grid sm:grid-cols-8 gap-1">
  <div class="col-start-1 sm:col-end-8  md:col-start-1 md:col-end-8  lg:col-end-7 pr-9 b-4 ml-10"><CoursesActivity /></div>
  <div class="sm:col-start-1 sm:col-end-8 md:col-start-1  md:col-end-8 lg:col-start-7 lg:col-end-9 mr-10">   <CoursesRating /></div>
 
</div>
      
     
    </section>
  </div>
</template>

<script>
import overViewCourses from "../components/Overviews/overview/overViewCourses.vue";
import CoursesActivity from "../components/Overviews/RecentActivity/CoursesActivity.vue";
import CoursesRating from "../components/Overviews/ratings/CoursesRating.vue";

export default {
  components: {
    overViewCourses,
    CoursesActivity,
    CoursesRating,
  },
};
</script>
