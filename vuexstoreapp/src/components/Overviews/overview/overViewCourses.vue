<style scoped>
.course-box {
  background: #f6f7f8;
  height: 180px;
  padding-top: 25%;
}

.course-box:hover {
  border: 1px solid #4d74b1;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .course-box {
    height: 150px;
    padding-top: 10%;
  }
}
</style>

<template>
  <section>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 pl-10">
      <div
        class="group-courses-box pl-0 pr-3 pb-10 p-10 text-center w-full"
        v-for="i in overViewcourses"
        :key="i.id"
      >
        <div class="course-box">
          <h1 class="font-bold">{{ i.data }}</h1>
          <p class="font-semibold">{{ i.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      overViewcourses: "course/getOverViewCourses",
    }),
  },
};
</script>
