// import Vue from "vue";
// import Vuex from "vuex";
import { createStore } from "vuex";
import { fetchNewsList, fetchJobsList } from "../api/index.js";

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     news: [],
//   },
// });

const store = createStore({
  state: {
    news: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          //console.log(response.data);
          context.commit("SET_NEWS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_JOBS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
