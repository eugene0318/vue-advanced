import axios from "axios";

// 1.http request & response와 관련된 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2.api함수들을 정리
function fetchNewsList() {
  // return axios.get(`${config.baseUrl}news/1.json`);
  return new Promise();
}

function fetchAskList() {
  try {
    const response = axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommitItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommitItem,
  fetchList,
};

//fetchNewsList().then().catch();
