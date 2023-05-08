<template lang="">
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">{{ item.points }}</div>
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
    </ul> -->

    <!-- <p v-for="item in fetchedAsk">
    <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
    <small>{{ item.time_ago }} by {{ item.user }}</small>
  </p> -->
  </div>
</template>
<script>
//import { mapState, mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
import emitter from "../utils/miit";
import ListMixin from "../mixins/ListMixin";
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   this.$store.dispatch("FETCH_ASK");
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
<style lang=""></style>
