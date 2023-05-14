import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store/index.js";
import mitts from "mitt"; // [mitt]]
//import miit from "./utils/miit";
const app = createApp(App);

app.use(router);
app.use(store);
const emitter = mitts();
app.config.globalProperties.$emitter = emitter;
app.use(mitts);
app.mount("#app");

// new Vue({
//     router, //추가
//     store,
//     render: h => h(App)
//   }).$mount('#app')

//createApp(App).mount("#app");
