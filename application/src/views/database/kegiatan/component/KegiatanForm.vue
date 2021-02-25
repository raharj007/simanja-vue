<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.deskripsi" @input="setDeskripsi" label="Deskripsi" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kelompok" item-value="id" item-text="text" :value="value.md_kelompok_id" @input="setKelompok" label="Kelompok" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kegiatan" item-value="id" item-text="text" :value="value.st_jenis_kegiatan_id" @input="setJenisKegiatan" label="Jenis Kegiatan" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="kategori" item-value="id" item-text="text" :value="value.st_kategori_jamaah_id" @input="setKategoriJamaah" label="Kategori Jamaah" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="level" item-value="id" item-text="text" :value="value.st_level_id" @input="setLevel" label="Level" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="desa" item-value="id" item-text="text" :value="value.st_desa_id" @input="setDesa" label="Desa" outlined dense></v-select>
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
      },
      kelompok: [],
      kegiatan: [],
      kategori: [],
      level: [],
      desa: [],
    }
  },
  created() {
    this.renderSelectKelompok();
    this.renderSelectKegiatan();
    this.renderSelectKategori();
    this.renderSelectLevel();
    this.renderSelectDesa();
  },
  methods: {
    async renderSelectKelompok() {
      let response = await data('/ref/master/kelompok');
      if (!response.error) this.kelompok = response.data.data;
    },

    async renderSelectKegiatan() {
      let response = await data('/ref/setup/jenis-kegiatan');
      if (!response.error) this.kegiatan = response.data.data;
    },

    async renderSelectKategori() {
      let response = await data('/ref/setup/kategori-jamaah');
      if (!response.error) this.kategori = response.data.data;
    },

    async renderSelectLevel() {
      let response = await data('/ref/setup/level');
      if (!response.error) this.level = response.data.data;
    },

    async renderSelectDesa() {
      let response = await data('/ref/setup/desa');
      if (!response.error) this.desa = response.data.data;
    },

    checkIsValid() {
      return this.value.id
          && this.value.deskripsi
          && this.value.md_kelompok_id
          && this.value.st_jenis_kegiatan_id
          && this.value.st_kategori_jamaah_id
          && this.value.st_level_id
          && this.value.st_desa_id
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setDeskripsi($event) {
      this.value.deskripsi = $event;
      return this.sendBack();
    },

    setKelompok($event) {
      this.value.md_kelompok_id = $event;
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

    setLevel($event) {
      this.value.st_level_id = $event;
      return this.sendBack();
    },

    setDesa($event) {
      this.value.st_desa_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>