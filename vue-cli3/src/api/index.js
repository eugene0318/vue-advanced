import axios from "axios";

// 1.http request & response와 관련된 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

// 2.api함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}/news/1.json`);
}

export { fetchNewsList };

//fetchNewsList().then().catch();
