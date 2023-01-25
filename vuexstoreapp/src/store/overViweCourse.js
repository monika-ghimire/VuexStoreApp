const state = {
  OverViewcourses: [],
};

const getters = {
  getOverViewCourses() {
    return [
      {
        id: 1,
        data: "06",
        title: "Courses Available",
      },
      {
        id: 2,
        data: "06",
        title: "Courses In Progress",
      },
      {
        id: 3,
        data: "05",
        title: "Courses Completed",
      },
      {
        id: 4,
        data: "51m 23s",
        title: "Avg Time per course",
      },
    ];
  },

  getCoursesRating(){
    return [
        {
        id:1,
        rate_out_of:'3/5',
        review:7,
        percentage:75,
        img:require("@/assets/loveemoji.jpg")

        },

        {
            id:2,
            rate_out_of:'2/5',
            review:2,
            percentage:50,
            img:require("@/assets/happyemoji.jpg")
        },
            {
                id:3,
                rate_out_of:'1/5',
                review:1,
                percentage:25,
                img:require("@/assets/Sademoji.jpg")
                },
                {
                    id:4,
                    rate_out_of:'0/5',
                    review:0,
                    percentage:5,
                    img:require("@/assets/Angryemoji.jpg")
                    
                    }
    ]


  }
};

const mutations = {};
  
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};