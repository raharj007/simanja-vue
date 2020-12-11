import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: () => import("../views/Home")},
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/data/absensi",
    name: "Absensi",
    component: () => import("../views/absensi/Absensi")
  },
  {
    path: "/data/jamaah",
    name: "Jamaah",
    component: () => import("../views/jamaah/Jamaah")
  },
  {
    path: "/setup/desa",
    name: "Desa",
    component: () => import("../views/setup/desa/Desa")
  },
  {
    path: "/setup/kelompok",
    name: "Kelompok",
    component: () => import("../views/setup/kelompok/Kelompok")
  },
  {
    path: "/setup/kepengurusan",
    name: "Kepengurusan",
    component: () => import("../views/setup/kepengurusan/Kepengurusan")
  },
];

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: "history",
  base: process.env.BASE_URL,
});



export default router;
