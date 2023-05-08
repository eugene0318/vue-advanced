<template lang="">
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">{{ job.points || 0 }}</div>
        <div>
          <p class="news-title">
            <a v-bind:href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a v-bind:href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul> -->

    <!-- <p v-for="job in this.$store.state.jobs">
      <a v-bind:href="job.url">{{ job.title }}</a
      ><small>{{ job.time_ago }}{{ job.domain }}</small>
    </p> -->
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
import emitter from "../utils/miit";
import ListMixin from "../mixins/ListMixin";
export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   this.$store.dispatch("FETCH_JOBS");
  //   //var vm = this;
  //   // fetchJobsList()
  //   //   .then((response) => (this.jobs = response.data))
  //   //   .catch((error) => console.log(error));
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_NEWS")
  //       .then(() => {
  //         console.log("fetched");
  //         this.emitter.emit("end:spinner");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0%;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
}

.news-title {
  margin: 0;
}

.link-text {
  color: grey;
}
</style>
