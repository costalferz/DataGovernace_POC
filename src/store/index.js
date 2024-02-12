import { createStore } from "vuex";

export default createStore({
  state: {
    userData: null,
    studentData: null,
    data: {
      personalData: null,
      emergency: null,
      education: null,
      trainning: null,
      language: null,
      skills: null,
      experience: null,
      awards: null,
    },
    currentTab: 0
  },
  getters: {
    userData(state) {
      return state.userData;
    },
    currentTab(state) {
      return state.currentTab
    }
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
    setCurrentTab(state, payload) {
      state.currentTab = payload
    },
    setPersonalData(state, payload) {
      state.data.personalData = payload
    },
    setEmergency(state, payload) {
      state.data.emergency = payload
    },
    setEducation(state, payload) {
      state.data.education = payload
    },
    setTrainning(state, payload) {
      state.data.trainning = payload
    },
  },
  actions: {
    setUserData(context, payload) {
      context.commit("setUserData", payload);
    },
    setCurrentTab(context, payload) {
      context.commit("setCurrentTab", payload)
    },
    setPersonalData(context, payload) {
      context.commit("setPersonalData", payload);
    },
    setEmergency(context, payload) {
      context.commit("setEmergency", payload);
    },
    setEducation(context, payload) {
      context.commit("setEducation", payload);
    },
    setTrainning(context, payload) {
      context.commit("setTrainning", payload);
    },
  },
  modules: {},
});
