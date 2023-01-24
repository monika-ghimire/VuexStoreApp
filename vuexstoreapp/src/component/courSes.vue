<script>
import { mapGetters } from "vuex";

export default {
  
  computed: {
    ...mapGetters({
      studentName: "student/getName",
      courses: "course/getCourses",
    }),
  },
};
</script>

<template>
  <div id="app">
  
    
    <section>
     <div class="grid grid-cols-2 pt-10 p-10">
      <div>
        <h3 class="font-bold">Courses</h3>
        <p class="font-bold">Manage, create or delete the course in a easy way.</p>
      </div>
      <div class="pr-10">
        <button class="Create-Course-btn">Create Course</button>
      </div>
     </div>


    </section>



    <section>
      <div class="pt-10 p-10">

      
                <el-table
      :data="courses"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="Course Title"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="Creation Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="module"
        label="Modules">
      </el-table-column>
      <el-table-column
        prop="Created_for"
        label=" Created for">
      </el-table-column>
      <el-table-column
        prop="course_by"
        label="Course by">
      </el-table-column>
      <el-table-column
        prop="Enrollments"
        label=" Enrollments">
      </el-table-column>
      
    </el-table>
  </div>

  </section>
  </div>
</template>

<style>


.list {
  border: 1px solid gray;
  
  padding: 10px;
  margin: 3px;
}
.Create-Course-btn{
background: rgb(5, 5, 102);
color: white;
padding: 8px;
float: right;

}
.a:hover{
color:rgb(34, 34, 191) ; 


}
</style>