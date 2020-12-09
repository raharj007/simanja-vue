<template>
  <v-main>
    <v-layout row justify-center>
      <v-dialog
        v-model="$store.state.app.loading.value"
        persistent
        content-class="centered-dialog"
      >
        <v-container fill-height>
          <v-layout column justify-center align-center>
            <v-progress-circular
              indeterminate
              :color="$store.state.app.loading.color"
            />
            <h1 v-if="$store.state.app.loading.message">
              {{ $store.state.app.loading.message }}
            </h1>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>
    <router-view />
  </v-main>
</template>

<script>
export default {
  name: 'MainContent',
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>

<style scoped></style>
