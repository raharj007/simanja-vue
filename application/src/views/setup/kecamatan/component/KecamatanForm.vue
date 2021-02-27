<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.id" @input="setId" label="Kode" outlined dense :readonly="isIDReadOnly"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-select :rules="rules.required" :items="provinsi" item-value="id" item-text="text" :value="value.st_provinsi_id" @input="setProvinsi" @change="provinsiChange" label="Provinsi" outlined dense :disabled="enprov"></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-select :rules="rules.required" :items="kabupaten" item-value="id" item-text="text" :value="value.st_kab_id" @input="setKabupaten" label="Kabupaten" ref="selectedKab" outlined dense :disabled="enkab"></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.nama" @input="setNama" label="Deskripsi" outlined dense></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "KecamatanForm",
  props: {
    value: {type: Object, default: () => {return {}}}
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
      },
      enprov: true,
      enkab: true,
      provinsi: [],
      kabupaten: [],
    }
  },
  computed: {
    isIDReadOnly() {
      return this.value.id !== undefined;
    }
  },
  created() {
    this.renderSelectProvinsi();
    if (this.value.st_provinsi_id !== undefined) this.renderSelectKabupaten(this.value.st_provinsi_id);
  },
  methods: {
    async renderSelectProvinsi() {
      let response = await data('/ref/setup/provinsi');
      if (!response.error) {
        this.provinsi = response.data.data;
        this.enprov = false;
      }
    },

    async renderSelectKabupaten(prov) {
      let response = await data(`/ref/setup/kabupaten/${prov}`);
      if (!response.error) {
        this.kabupaten = response.data.data;
        this.enkab = false;
      }
    },

    provinsiChange() {
      this.$refs['selectedKab'].reset();
      this.enkab = true;
      this.renderSelectKabupaten(this.value.st_provinsi_id);
    },

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

    setProvinsi($event) {
      this.value.st_provinsi_id = $event;
      return this.sendBack();
    },

    setKabupaten($event) {
      this.value.st_kab_id = $event;
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