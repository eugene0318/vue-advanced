<template lang="">
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <!--포인트 영역-->
        <div class="points">{{ job.points || 0 }}</div>
        <!--기타 정보 영역-->
        <div>
          <p class="news-title">
            <a v-bind:href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <!-- <router-link v-bind:to="`/user/${job.user}`" class="link-text">{{
              job.domain
            }}</router-link> -->

            <a v-bind:href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>

    <!-- <p v-for="job in this.$store.state.jobs">
      <a v-bind:href="job.url">{{ job.title }}</a
      ><small>{{ job.time_ago }}{{ job.domain }}</small>
    </p> -->
  </div>
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
