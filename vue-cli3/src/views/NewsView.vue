<template lang="">
  <div>
    <div>hiiii</div>
    <!-- <div v-for="user in users">{{ user.title }}</div> -->
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>
<script>
//import axios from "axios";
//import { fetchNewsList } from "../api/index.js";
export default {
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // var vm = this;
    // fetchNewsList()
    //   .then(function (response) {
    //     console.log(response);
    //     //화살표함수 아닐때 this로 data 접근 불가능
    //     vm.users = response.data;
    //     //this.users = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
  //getNewsList();
};
</script>
<style lang=""></style>
