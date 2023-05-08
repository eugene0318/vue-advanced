//import createRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "@/views/CreatedListView";

// export const router = new VueRouter({
//   routes: [
//     { path: "/news", component: NewsView },
//     { path: "/jobs", component: AskView },
//     { path: "/ask", component: JobsView },
//   ],
// });

const routes = [
  { path: "/", redirect: "/news" },
  {
    path: "/news",
    name: "news",
    component: NewsView,
    //component: createListView("NewsView"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
    //component: createListView("JobsView"),
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
    //component: createListView("AskView"),
  },
  { path: "/user/:id", component: UserView },
  { path: "/item/:id", component: ItemView },
];
//라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//라우터 추출
export default router;
