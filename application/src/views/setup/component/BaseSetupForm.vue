<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :value="value.nama" @input="sendBack" label="Deskripsi"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BaseForm",
  props: {
    value: {type: Object, default: () => {return {}}}
  },
  methods: {
    sendBack($event) {
      this.value.nama = $event;
      return this.$emit('input', this.value);
    }
  }
}
</script>

<style scoped>

</style>