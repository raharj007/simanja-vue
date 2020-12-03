<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>SIMANJA</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app> Side Menu </v-navigation-drawer>
    <v-main>
      <HelloWorld />
    </v-main>
    <v-footer app> Footer </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
