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
  //data
  {
    path: "/data/absensi",
    name: "Absensi",
    component: () => import("../views/database/absensi/Absensi")
  },
  {
    path: "/data/jamaah",
    name: "Jamaah",
    component: () => import("../views/database/jamaah/Jamaah")
  },
  {
    path: "/data/kegiatan",
    name: "Kegiatan",
    component: () => import("../views/database/kegiatan/Kegiatan")
  },
  {
    path: "/data/kelompok",
    name: "Kelompok",
    component: () => import("../views/database/kelompok/Kelompok")
  },
  {
    path: "/data/kepengurusan",
    name: "Kepengurusan",
    component: () => import("../views/database/kepengurusan/Kepengurusan")
  },
  //setup
  {
    path: "/setup/desa",
    name: "Desa",
    component: () => import("../views/setup/desa/Desa")
  },
  {
    path: "/setup/jenis-kegiatan",
    name: "JenisKegiatan",
    component: () => import("../views/setup/jeniskegiatan/JenisKegiatan")
  },
  {
    path: "/setup/kabupaten",
    name: "Kabupaten",
    component: () => import("../views/setup/kabupaten/Kabupaten")
  },
  {
    path: "/setup/kategori-jamaah",
    name: "KategoriJamaah",
    component: () => import("../views/setup/kategorijamaah/KategoriJamaah")
  },
  {
    path: "/setup/kecamatan",
    name: "Kecamatan",
    component: () => import("../views/setup/kecamatan/Kecamatan")
  },
  {
    path: "/setup/kelurahan",
    name: "Kelurahan",
    component: () => import("../views/setup/kelurahan/Kelurahan")
  },
  {
    path: "/setup/kepengurusan",
    name: "Kepengurusan",
    component: () => import("../views/setup/kepengurusan/Kepengurusan")
  },
  {
    path: "/setup/level",
    name: "Level",
    component: () => import("../views/setup/level/Level")
  },
  {
    path: "/setup/provinsi",
    name: "Provinsi",
    component: () => import("../views/setup/provinsi/Provinsi")
  },
  {
    path: "/setup/status-jamaah",
    name: "StatusJamaah",
    component: () => import("../views/setup/statusjamaah/StatusJamaah")
  },
  {
    path: "/setup/status-kehadiran",
    name: "StatusKehadiran",
    component: () => import("../views/setup/statuskehadiran/StatusKehadiran")
  },
  {
    path: "/setup/tipe-mutasi",
    name: "TipeMutasi",
    component: () => import("../views/setup/tipemutasi/TipeMutasi")
  },
  //transaksi
  {
    path: "/trans/jadwal",
    name: "TransJadwal",
    component: () => import("../views/trans/jadwal/Jadwal")
  },
  {
    path: "/trans/kepengurusan",
    name: "TransKepengurusan",
    component: () => import("../views/trans/kepengurusan/Kepengurusan")
  },
  {
    path: "/trans/presensi",
    name: "TransPresensi",
    component: () => import("../views/trans/presensi/Presensi")
  },
];

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: "history",
  base: process.env.BASE_URL,
});



export default router;
