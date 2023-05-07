import ListView from "../views/ListView";
export default function createListView(name) {
  return {
    //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
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
    render(createElement) {
      return createElement(ListView);
    },
  };
}
