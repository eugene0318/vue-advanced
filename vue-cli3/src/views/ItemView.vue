<template lang="">
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{
          fetchedItem.user
        }}</router-link>
        <template slot="time">
          {{ "posted " + fetchedItem.time_ago }}
        </template> </user-profile
      >?
      <!--사용자 상세 정보-->
      <!-- <div class="user-container">
        <div><i class="fas fa-user"></i></div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{
            fetchedItem.user
          }}</router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
  </div>
  <!-- <a>{{ this.$store.state.item.title }}</a> -->
  <!-- <a>{{ fetchedItem.title }}</a> -->
  <!-- <div>{{ this.$store.state.item.content }}</div> -->
  <!-- <div>{{ fetchedItem.content }}</div> -->
</template>
<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>
<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 7px;
}
</style>
