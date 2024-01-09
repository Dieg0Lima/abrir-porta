// @/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./router-guards";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/LoginView.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/inicio",
    component: () => import("@/views/HomeView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/inicio",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    authGuard(to, from, next);
  } else {
    next();
  }
});

export default router;
