<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.id" counter maxlength="5" :value="value.id" @input="setID" label="ID" outlined dense :readonly="isIDReadOnly"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.nama" @input="setNama" label="Deskripsi" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kepengurusan" item-value="id" item-text="text" :value="value.st_kepengurusan_id" @input="setKepengurusan" label="Kepengurusan" outlined dense :disabled="enkep"></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="level" item-value="id" item-text="text" :value="value.st_level_id" @input="setLevel" label="Level" outlined dense :disabled="enlvl"></v-select>
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
        id: [
          value => !!value || 'Kolom ini harus diisi!',
          value => value.length >= 3 || 'Minimal 3 karakter!',
          value => value.length <= 5 || 'Maksimal 5 karakter!',
        ],
      },
      enkep: true,
      enlvl: true,
      kepengurusan: [],
      level: [],
    }
  },
  computed: {
    isIDReadOnly() {
      return this.value.id !== undefined;
    }
  },
  created() {
    this.renderSelectKepengurusan();
    this.renderSelectLevel();
  },
  methods: {
    async renderSelectKepengurusan() {
      let response = await data('/ref/setup/kepengurusan');
      if (!response.error) {
        this.kepengurusan = response.data.data;
        this.enkep = false;
      }
    },

    async renderSelectLevel() {
      let response = await data('/ref/setup/level');
      if (!response.error) {
        this.level = response.data.data;
        this.enlvl = false;
      }
    },

    checkIsValid() {
      return this.value.id
          && this.value.nama
          && this.value.st_kepengurusan_id
          && this.value.st_level_id
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setID($event) {
      this.value.id = $event;
      return this.sendBack();
    },

    setNama($event) {
      this.value.nama = $event;
      return this.sendBack();
    },

    setKepengurusan($event) {
      this.value.st_kepengurusan_id = $event;
      return this.sendBack();
    },

    setLevel($event) {
      this.value.st_level_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>