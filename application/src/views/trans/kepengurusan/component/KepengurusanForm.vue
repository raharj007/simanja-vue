<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-select :rules="rules.required" :items="jamaah" item-value="id" item-text="text" :value="value.md_jamaah_nik" @input="setJamaah" label="Pilih Jamaah" outlined dense :readonly="isJamaahReadOnly"></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-select :rules="rules.required" :items="kepengurusan" item-value="id" item-text="text" :value="value.md_kepengurusan_id" @input="setKepengurusan" label="Kepengurusan" outlined dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "KepengurusanForm",
  props: {
    formIsValid: {type: Boolean, default: false},
    value: {type: Object, default: () => {return {}}},
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
      },
      jamaah: [],
      kepengurusan: [],
    }
  },
  computed: {
    isJamaahReadOnly() {
      return this.value.id !== undefined;
    }
  },
  created() {
    this.renderSelectJamaah();
    this.renderSelectKepengurusan();
  },
  methods: {
    async renderSelectJamaah() {
      let response = await data('/ref/master/jamaah');
      if (!response.error) this.jamaah = response.data.data;
    },

    async renderSelectKepengurusan() {
      let response = await data('/ref/master/kepengurusan');
      if (!response.error) this.kepengurusan = response.data.data;
    },

    checkIsValid() {
      return this.value.md_jamaah_nik
          && this.value.md_kepengurusan_id
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setJamaah($event) {
      this.value.md_jamaah_nik = $event;
      return this.sendBack();
    },

    setKepengurusan($event) {
      this.value.md_kepengurusan_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>