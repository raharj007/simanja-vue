<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.nama" @input="sendBack" label="Deskripsi" outlined dense></v-text-field>
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
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
      }
    }
  },
  methods: {
    checkIsValid() {
      return this.value.nama;
    },

    sendBack($event) {
      this.value.nama = $event;
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    }
  }
}
</script>

<style scoped>

</style>