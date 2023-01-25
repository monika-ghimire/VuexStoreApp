<script scoped>
import { mapGetters } from "vuex";

export default {
  // components: { Courses },
  computed: {
    ...mapGetters({
      overViewcourses: "OverViewcourses/getOverViewCourses",
      CoursesRating: "OverViewcourses/getCoursesRating",
      courses: "course/getCourses",
    }),
  },
};
</script>

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
      <div class="grid  sm:grid-cols-2 md:grid-cols-4 pl-10 ">
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

    <section>
      <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7 pb-10 relative">

        <div class="col-start-1 md:col-end-5 pr-9 b-4 ml-10">
          <div class="boder">
            <div class="header-recent-activities w-full semi-bold">
              Recent activities
            </div>

            <div
              class="table-holder border-l-2 border-indigo-10  pt-10 relative pr-8"
            >
              <ul v-for="i in courses" :key="i.id">
                <li class="ml-4 mt-4 pt-8">
                  <span>{{ i.new_title }}</span>
                  <span class="float-right">{{ i.date }}</span>

                  <div class="flex flex-row w-full pt-8">
                    <div><img src="../assets/card1.jpg" /></div>

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

        <div class="border-2 Course-ratings-content sm:col-start-1 md:col-start-1 lg:col-start-5 sm:col-end-8 mr-10">
          <p class="font-semibold p-4">Course ratings</p>

          <div>
            <div class="text-center pt-10">
              <img src="../assets/happyemoji.jpg" class="happt-emoji" />
              <p>4.0/5</p>
              <p class="font-semibold">Based on 10 reviews</p>
            </div>

            <div
              class="grid grid-cols-9 p-3 pb-1 pl-10 mt-4 font-semibold gap-2"
              v-for="i in CoursesRating"
              :key="i.id"
            >
              <label class="col-start-1 col-end-3 pl-1">
                <img :src="i.img" />
              </label>
              <label class="text-center col-start-3 col-end-6">
                <span>{{ i.rate_out_of }}</span>
                <br />
                <el-progress
                  :percentage="`${i.percentage}`"
                  :show-text="false"
                ></el-progress>
              </label>
              <label class="col-start-6 col-end-9 mt-3 ml-2"
                >{{ i.review }} review</label
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.course-box {
  background: #f6f7f8;
  height: 180px;
  padding-top: 25%;
}

.course-box:hover {
  border: 1px solid #4d74b1;
}
.happt-emoji {
  background: #abafb3;
  margin-left: 40%;
  border-radius: 50%;
}
.header-recent-activities {
  border: 1px solid gainsboro;
  padding: 10px;
}
.table-holder {
  height: 70%;
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
  height: 700px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

 
.Course-ratings-content{

margin-left: 8%;
margin-top: 5%;
font-size: 0.9em;
}
.boder{
font-size: 0.8em;
height:auto;
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
.course-box {
  
  height: 150px;
  padding-top: 10%;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

.Course-ratings-content{

margin-left: 10%;
margin-top: 4%;
padding-bottom: 4%;
}

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
 
.Course-ratings-content{

margin-left:4%;
margin-top: 0%;
padding-bottom: 4%;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {


}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {


}
</style>
