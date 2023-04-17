<template lang="">
  <div v-for="item in fetchedAsk">{{ item.title }}</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  computed: {
    ...mapGetters(
      ["fetchedAsk"]
      // {
      //   fetchedAsk: "fetchedAsk",
      // }
    ),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // ask(){
    //   return this.$store.state;
    // }
  },
  created() {
    // fetchAskList()
    //   .then(function (response) {
    //     vm.ask = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    this.$store.dispatch("FETCH_AKS");
  },
};
</script>
<style lang=""></style>
