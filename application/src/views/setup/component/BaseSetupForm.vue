<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.id" @input="setId" label="Kode" outlined dense></v-text-field>
        <v-text-field :rules="rules.required" :value="value.nama" @input="setNama" label="Deskripsi" outlined dense></v-text-field>
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
      return this.value.id && this.value.nama;
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },
    setId($event) {
      this.value.id = $event;
      return this.sendBack();
    },
     setNama($event) {
      this.value.nama = $event;
      return this.sendBack();
    },
  }
}
</script>

<style scoped>

</style>