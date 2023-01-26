<style lang="sass" scoped>

</style>


<template>
  <section>
      <div class="pt-10 p-10">
        <el-table :data="courses" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="Course Title" width="180">
            <template >
              <img src="../../assets/card1.jpg" />
            </template>
          </el-table-column>

          <el-table-column prop="title"  :align="left">
          </el-table-column>

          <el-table-column prop="date" label="Creation Date" width="180">
          </el-table-column>
          <el-table-column prop="module" label="Modules"> </el-table-column>
          <el-table-column prop="Created_for" label=" Created for">
          </el-table-column>
          <el-table-column prop="course_by" label="Course by">
          </el-table-column>
          <el-table-column prop="Enrollments" label=" Enrollments">
          </el-table-column>
        </el-table>
      </div>
    </section>  
</template>


<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      courses: "course/getCourses",
    }),
  },
};

</script>
