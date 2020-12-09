<template>
  <v-snackbar
    v-model="$store.state.app.snackbar.show"
    :timeout="timeout"
    :color="$store.state.app.snackbar.color"
    top
  >
    {{ $store.state.app.snackbar.message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  data: () => ({
    timeout: 2000
  })
};
</script>

<style scoped></style>
