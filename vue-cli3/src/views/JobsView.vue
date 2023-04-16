<template lang="">
  <div v-for="job in this.$store.state.jobs">{{ job.title }}</div>
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
