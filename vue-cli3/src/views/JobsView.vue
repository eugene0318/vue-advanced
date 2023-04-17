<template lang="">
  <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
  <p v-for="job in this.$store.state.jobs">
    <a v-bind:href="job.url">{{ job.title }}</a
    ><small>{{ job.time_ago }}{{ job.domain }}</small>
  </p>
</template>
<script>
export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    //var vm = this;
    // fetchJobsList()
    //   .then((response) => (this.jobs = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>
<style lang=""></style>
