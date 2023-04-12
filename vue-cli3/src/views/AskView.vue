<template lang="">
  <div v-for="item in ask">{{ item.title }}</div>
</template>
<script>
import { fetchAskList } from "../api/index";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then(function (response) {
        vm.ask = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style lang=""></style>
