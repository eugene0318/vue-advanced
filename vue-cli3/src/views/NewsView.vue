<template lang="">
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
import emitter from "../utils/miit";

export default {
  components: {
    ListItem,
  },
  created() {
    this.emitter.emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_NEWS")
        .then(() => {
          console.log("fetched");
          this.emitter.emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  },
};
</script>
<style lang=""></style>
