<template>
  <v-app>
    <Bar/>
    <Navigation/>
    <MainContent/>
    <Footer/>
    <SnackBar/>
  </v-app>
</template>

<script>

import Navigation from "@/components/core/Navigation";
import MainContent from "@/components/core/MainContent";
import Footer from "@/components/core/Footer";
import SnackBar from "@/components/core/Snackbar";
import Bar from "@/components/core/Bar";
export default {
  name: "App",
  components: {
    SnackBar,
    Bar,
    Footer,
    MainContent,
    Navigation
  },
  data: () => ({
    //
  }),
  created() {
    // this.$router.push("/login").catch(() => {});
  }
};
</script>
