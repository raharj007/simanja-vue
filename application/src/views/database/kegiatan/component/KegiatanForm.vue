<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field type="number" :rules="rules.id" counter maxlength="16" :value="value.id" @input="setID" label="ID" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.deskripsi" @input="setDeskripsi" label="Deskripsi" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="level" item-value="id" item-text="text" :value="value.st_level_id" @input="setLevel" label="Level" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="kegiatan" item-value="id" item-text="text" :value="value.st_jenis_kegiatan_id" @input="setJenisKegiatan" label="Jenis Kegiatan" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="kategori" item-value="id" item-text="text" :value="value.st_kategori_jamaah_id" @input="setKategoriJamaah" label="Kategori Jamaah" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="desa" item-value="id" item-text="text" :value="value.st_desa_id" @input="setDesa" label="Desa" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kelompok" item-value="id" item-text="text" :value="value.st_kelompok_id" @input="setKelompok" label="Kelompok" outlined dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "KegiatanForm",
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
          value => value.length <= 16 || 'Maksimal 16 karakter!',
        ],
      },
      level: [],
      kegiatan: [],
      kategori: [],
      desa: [],
      kelompok: [],
    }
  },
  created() {
    this.renderSelectLevel();
    this.renderSelectKegiatan();
    this.renderSelectKategori();
    this.renderSelectDesa();
    this.renderSelectKelompok();
  },
  methods: {
    async renderSelectLevel() {
      let response = await data('/data');
      if (!response.error) this.level = response.data;
    },

    async renderSelectKegiatan() {
      let response = await data('/data');
      if (!response.error) this.kegiatan = response.data;
    },

    async renderSelectKategori() {
      let response = await data('/data');
      if (!response.error) this.kategori = response.data;
    },

    async renderSelectDesa() {
      let response = await data('/data');
      if (!response.error) this.desa = response.data;
    },

    async renderSelectKelompok() {
      let response = await data('/data');
      if (!response.error) this.kelompok = response.data;
    },

    checkIsValid() {
      return this.value.id
          && this.value.deskripsi
          && this.value.st_level_id
          && this.value.st_jenis_kegiatan_id
          && this.value.st_kategori_jamaah_id
          && this.value.st_desa_id
          && this.value.st_kelompok_id
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setID($event) {
      this.value.id = $event;
      return this.sendBack();
    },

    setDeskripsi($event) {
      this.value.deskripsi = $event;
      return this.sendBack();
    },

    setLevel($event) {
      this.value.st_level_id = $event;
      return this.sendBack();
    },

    setJenisKegiatan($event) {
      this.value.st_jenis_kegiatan_id = $event;
      return this.sendBack();
    },

    setKategoriJamaah($event) {
      this.value.st_kategori_jamaah_id = $event;
      return this.sendBack();
    },

    setDesa($event) {
      this.value.st_desa_id = $event;
      return this.sendBack();
    },

    setKelompok($event) {
      this.value.st_kelompok_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>