const state = {
  name: "frist name",
};

const getters = {

    getName(state){
     return state.name
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
