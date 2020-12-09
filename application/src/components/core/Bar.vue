<template>
  <v-app-bar v-if="$route.path !== '/login'" app color="white">
    <v-app-bar-nav-icon @click.stop="toggleNavigation"></v-app-bar-nav-icon>
    <v-toolbar-title>SiManja</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click.prevent.stop="clickLogout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Bar",
  methods: {
    ...mapMutations("app", ["toggleNav"]),
    ...mapMutations("auth", ["clearAll"]),
    toggleNavigation() {
      this.toggleNav();
    },
    clickLogout() {
      this.$router.push("/login");
      this.clearAll();
    }
  }
};
</script>

<style scoped></style>
