<template lang="">
  <a>{{ this.$store.state.item.title }}</a>
  <div>{{ this.$store.state.item.content }}</div>
</template>
<script>
export default {
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>
<style lang=""></style>
