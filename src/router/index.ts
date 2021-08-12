import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tiptap",
    name: "tiptap",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tiptap.vue"),
  },
  {
    path: "/mockdown",
    name: "mockdown",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/mockdown.vue"),
  },
  {
    path: "/medium",
    name: "medium",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/medium.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
