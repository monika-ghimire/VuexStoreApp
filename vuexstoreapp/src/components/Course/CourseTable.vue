<style scoped>
.image {
  width: 60%;
}
.input input {
  border: red;
}
</style>

<template>
  <section>
    <div class="pt-10 p-10">
      <div class="border-none">
        <!-- <button class="material-symbols-outlined" ></button> -->
        <el-input  
          v-model="search" size="large"  
          class="border-dotted"  
           prefix-icon="el-icon-search"  
           placeholder="Search here …" />
      </div>

      <el-table
        :header-cell-style="{ background: 'white' }"
        :data="
          courses.filter(
            (data) =>
              !search ||
              data.course_by.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <!-- tesi-->
        <el-table-column type="selection" width="55"> </el-table-column>

        <el-table-column
          prop="img"
          label="Course Title"
          width="180"
          class="img"
        >
          <template slot-scope="scope">
            <img :src="scope.row.img" class="image" />
          </template>
        </el-table-column>

        <el-table-column prop="title"> </el-table-column>

        <el-table-column prop="date" label="Creation Date" width="180">
        </el-table-column>
        <el-table-column prop="module" label="Modules"> </el-table-column>
        <el-table-column prop="Created_for" label=" Created for">
        </el-table-column>

        <el-table-column prop="course_by" label="Course by"> </el-table-column>
        <el-table-column prop="Enrollments" label=" Enrollments">
        </el-table-column>

        <!--end-->
      </el-table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },

  computed: {
    ...mapGetters({
      courses: "course/getCourses",
    }),
  },
};
</script>
