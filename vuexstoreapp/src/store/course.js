const state = {
   courses:[]
  };
  
  const getters = {

    getCourses(){
        return [
            {  id:1,
                img:require('../assets/img.png'),
                title:" charge station",
                date:'05 Sep, 2022',
                module:6,
                Created_for:'Anker',
                course_by:"By Anker",
                Enrollments:1
        
            },
            {  id:2,
                img:require('../assets/img.png'),
                title:" charge station",
                date:'05 Sep, 2022',
                module:6,
                Created_for:'Anker',
                course_by:"By Anker",
                Enrollments:0
        
            },

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
  