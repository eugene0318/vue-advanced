<template lang="">
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
import emitter from "../utils/miit";
import ListMixin from "../mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   this.emitter.emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_NEWS")
  //     .then(() => {
  //       console.log("fetched");
  //       this.emitter.emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>
<style lang=""></style>
