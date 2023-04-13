import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store";

createApp(App).use(router, store).mount("#app");

//createApp(App).mount("#app");
