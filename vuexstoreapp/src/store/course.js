const state = {
   courses:[]
  };
  
  const getters = {

    getCourses(){
        return [
            {  id:1,
              img:require("@/assets/card1.jpg"),
                title:" charge station",
                date:'05 Sep, 2022',
                module:6,
                Created_for:'Anker',
                course_by:"By Anker",
                Enrollments:1,
                new_title:'A new course has been added',
                hours:'12 hours 13min'
        
            },
            {  id:2,
              img:require("@/assets/card2.jpg"),
                title:" charge station",
                date:'05 Sep, 2022',
                module:6,
                Created_for:'Anker',
                course_by:"By Anker",
                Enrollments:0,
                new_title:'A new email template has been created'
        
            },

        ]
    },

    
  
    
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
  