import ListView from "./ListView.vue";

import { h } from "vue";

export default function createListView(name) {
  return {
    //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리

    name: name,

    created() {
      this.$store.state.loading = true;

      this.$store
        .dispatch("FETCH_LIST", this.$route.name)

        .then(() => {
          console.log("success LIST");

          this.$store.state.loading = false;
        })

        .catch((error) => console.log(error));
    },

    render() {
      return h(ListView);
    },
  };
}
