<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field v-bind:value="value.nama" v-on:input="$emit('input', $event.target.value)" label="Deskripsi"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BaseForm",
  props: ['value'],
}
</script>

<style scoped>

</style>