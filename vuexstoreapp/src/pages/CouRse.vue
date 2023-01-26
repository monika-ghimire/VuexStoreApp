<style scoped>
.list {
  border: 1px solid gray;

  padding: 10px;
  margin: 3px;
}
.Create-Course-btn {
  background: rgb(5, 5, 102);
  color: white;
  padding: 8px;
  float: right;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .Create-Course-btn {
    padding: 4px;
    font-size: 0.8em;
  }
}
</style>

<template>
    <div>
        <section>
    <div class="grid grid-cols-2 pt-10 p-10">
      <div>
        <h3 class="font-bold">Courses</h3>
        <p class="font-semibold">
          Manage, create or delete the course in a easy way.
        </p>
      </div>
      <div class="pr-10">
        <button class="Create-Course-btn">+ Create Course</button>
      </div>
    </div>
  </section>

  <section>
    <CourseTable/>

  </section>
    </div>
  
</template>

<script>
import CourseTable from '@/components/Course/CourseTable.vue';

export default {
    components:{
        CourseTable
    }
}


</script>
