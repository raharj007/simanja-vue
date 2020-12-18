<template>
  <v-navigation-drawer
    v-if="$route.path !== '/login'"
    v-model="$store.state.app.navigation"
    app
    overflow
    mobile-breakpoint="913"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{
            $store.state.auth.profile
              ? $store.state.auth.profile.info.nama
              : ""
          }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ getCompany }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list>
      <template>
        <div v-for="item in items" :key="item.title">
          <v-list-group
            v-model="item.active"
            v-if="
              item.items && item.roles.filter(role => roles.indexOf(role) > -1).length > 0
            "
            :prepend-icon="item.icon"
            :group="item.group"
            no-action
            link
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.to"
              v-show="subItem.roles.filter(role => roles.indexOf(role) > -1).length > 0"
            >
              <v-list-item-icon>
                <v-icon v-text="subItem.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else-if="item.roles.filter(role => roles.indexOf(role) > -1).length > 0"
            :prepend-icon="item.icon"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navigation",
  methods: {
    ...mapGetters("auth", ["getProfile"])
  },
  computed: {
    getCompany() {
      if (this.getProfile()?this.getProfile().roles.includes("admin"):false) {
        return "Admin Si Manja";
      } else if (this.getProfile()?this.getProfile().roles.includes("admin"):false) {
        return "Jamaah";
      }
      return "";
    },
    roles(){
      return this.$store.state.auth.profile? this.$store.state.auth.profile.roles: [];
    }
  },
  mounted() {
    // console.log(this.getProfile());
  },
  data: () => ({
    icon: "mdi-gas-station-outline",
    text: "sub title",
    items: [
      {
        title: "Home",
        icon: "mdi-home-analytics",
        to: "/home",
        roles: ["admin", "user"]
      },
      {
        title: "Database",
        icon: "mdi-database",
        group: "data",
        roles: ["admin", "user"],
        items: [
          {
            icon: "mdi-content-paste",
            title: "Jamaah",
            to: "/data/jamaah",
            roles: ["admin", "user"]
          },
          {
            icon: "mdi-content-paste",
            title: "Absensi",
            to: "/data/absensi",
            roles: ["admin"]
          },
        ]
      },
      {
        title: "Setup",
        icon: "mdi-archive",
        group: "setup",
        roles: ["admin"],
        items: [
          {
            icon: "mdi-content-paste",
            title: "Desa",
            to: "/setup/desa",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Jenis Kegiatan",
            to: "/setup/jenis-kegiatan",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Kabupaten",
            to: "/setup/kabupaten",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Kategori Jamaah",
            to: "/setup/kategori-jamaah",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Kecamatan",
            to: "/setup/kecamatan",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Kelompok",
            to: "/setup/kelompok",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Kelurahan",
            to: "/setup/kelurahan",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Kepengurusan",
            to: "/setup/kepengurusan",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Level",
            to: "/setup/level",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Provinsi",
            to: "/setup/provinsi",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Status Jamaah",
            to: "/setup/status-jamaah",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Status Kehadiran",
            to: "/setup/status-kehadiran",
            roles: ["admin"],
          },
          {
            icon: "mdi-content-paste",
            title: "Tipe Mutasi",
            to: "/setup/tipe-mutasi",
            roles: ["admin"],
          },
        ]
      }
    ]
  }),
};
</script>

<style scoped></style>
