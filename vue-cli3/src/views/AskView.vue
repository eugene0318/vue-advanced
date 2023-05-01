<template lang="">
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <!--포인트 영역-->
        <div class="points">{{ item.points }}</div>
        <!--기타 정보 영역-->
        <div>
          <p class="news-title">
            <router-link v-bind:to="`/item/${item.id}`">{{
              item.title
            }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>

    <!-- <p v-for="item in fetchedAsk">
    <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
    <small>{{ item.time_ago }} by {{ item.user }}</small>
  </p> -->
  </div>
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
