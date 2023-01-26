<script>
import { mapGetters } from "vuex";

export default {
  // components: { Courses },
  computed: {
    ...mapGetters({
      courses: "course/getCourses",
    }),
  },
};
</script>

<template>
  <div>
    <div class="relative">
      <div class="boder">
        <div class="header-recent-activities w-full semi-bold">
          Recent activities
        </div>

        <div
          class="table-holder border-l-2 border-indigo-10 pt-10 relative pr-8"
        >
          <ul v-for="i in courses" :key="i.id">
            <li class="ml-4 mt-4 pt-8">
              <span>{{ i.new_title }}</span>
              <span class="float-right">{{ i.date }}</span>

              <div class="flex flex-row w-full pt-8">
                <div><img src="../../../assets/card1.jpg" /></div>

                <div class="mt-4">
                  <div>
                    <p class="ml-4">{{ i.title }}</p>
                  </div>
                </div>

                <div class="mt-5">
                  <span class="module font-semibold"
                    >module :{{ i.module }}</span
                  >
                  <span class="hours font-semibold"> {{ i.hours }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-recent-activities {
  border: 1px solid gainsboro;
  padding: 10px;
}
.table-holder {
  /* height: 30%; */
  margin-left: 12%;
}
.table-holder ul {
  list-style: circle;
}
.hours {
  position: absolute;
  right: 20px;
}
.module {
  position: absolute;
  right: 170px;
}
.boder {
  border: 1px solid gainsboro;
  height: 500px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .Course-ratings-content {
    margin-left: 8%;
    margin-top: 5%;
    font-size: 0.9em;
  }
  .boder {
    font-size: 0.8em;
    height: auto;
    padding-bottom: 10%;
  }

  .hours {
    position: absolute;
    right: 10px;
  }
  .module {
    position: absolute;
    right: 10px;
    margin-top: 20px;
  }
}
</style>
