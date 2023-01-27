<style scoped>
.happt-emoji {
  background: #abafb3;
  margin-left: 40%;
  border-radius: 50%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .Course-ratings-content {
    margin-left: 8%;
    margin-top: 5%;
    font-size: 0.9em;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .Course-ratings-content {
    margin-left: 10%;
    margin-top: 4%;
    padding-bottom: 4%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .Course-ratings-content {
    margin-left: 4%;
    margin-top: 0%;
    padding-bottom: 4%;
  }
}
</style>

<template>
    <div>
        <section>
    

    <div class="border-2 Course-ratings-content ">
      <p class="font-semibold p-4">Course ratings</p>

      <div>
        <div class="text-center pt-10">
          <img src="../../../assets/happyemoji.jpg" class="happt-emoji" />
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
              :percentage="parseInt(i.percentage)"
              :show-text="false"
            ></el-progress>
          </label>
          <label class="col-start-6 col-end-9 mt-3 ml-2"
            >{{ i.review }} review</label
          >
        </div>
      </div>
    </div>

</section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  
  computed: {
    ...mapGetters({
     
      CoursesRating: "course/getCoursesRating",
     
    }),
  },
};
</script>
