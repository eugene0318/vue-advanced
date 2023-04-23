import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommitItem,
} from "../api/index.js";
export default {
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
  FETCH_AKS({ commit }) {
    fetchAskList()
      .then((response) => {
        commit("SET_ASK", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommitItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
