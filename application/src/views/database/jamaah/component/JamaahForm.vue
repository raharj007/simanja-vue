<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :value="value.nik" @input="setNIK" label="NIK"></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-text-field :value="value.nama" @input="setNama" label="Nama"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.jenis_kelamin" @input="setJenisKelamin" label="Jenis Kelamin"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.tempat_lahir" @input="setTempatLahir" label="Tempat Lahir"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.tanggal_lahir" @input="setTglLahir" label="Tgl Lahir"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.hp" @input="setNoHp" label="No. Hp"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :value="value.alamat" @input="setAlamat" label="Alamat"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.kel_id" @input="setKelurahan" label="Kelurahan"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.kec_id" @input="setKecamatan" label="Kecamatan"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.kab_id" @input="setKabupaten" label="Kabupaten"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :value="value.provinsi_id" @input="setProvinsi" label="Provinsi"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.st_kelompok_id" @input="setKelompok" label="Kelompok"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.st_kategori_jamaah_id" @input="setKategoriJamaah" label="Kategori"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :value="value.st_status_jamaah_id" @input="setStatusJamaah" label="Status"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JamaahForm",
  props: {
    value: {type: Object, default: () => {return {}}},
  },
  methods: {
    sendBack() {
      return this.$emit('input', this.value);
    },

    setNIK($event) {
      this.value.nik = $event;
      return this.sendBack();
    },

    setNama($event) {
      this.value.nama = $event;
      return this.sendBack();
    },

    setJenisKelamin($event) {
      this.value.jenis_kelamin = $event;
      return this.sendBack();
    },

    setTempatLahir($event) {
      this.value.tempat_lahir = $event;
      return this.sendBack();
    },

    setTglLahir($event) {
      this.value.tanggal_lahir = $event;
      return this.sendBack();
    },

    setNoHp($event) {
      this.value.hp = $event;
      return this.sendBack();
    },

    setAlamat($event) {
      this.value.alamat = $event;
      return this.sendBack();
    },

    setKelurahan($event) {
      this.value.kel_id = $event;
      return this.sendBack();
    },

    setKecamatan($event) {
      this.value.kec_id = $event;
      return this.sendBack();
    },

    setKabupaten($event) {
      this.value.kab_id = $event;
      return this.sendBack();
    },

    setProvinsi($event) {
      this.value.provinsi_id = $event;
      return this.sendBack();
    },

    setKelompok($event) {
      this.value.st_kelompok_id = $event;
      return this.sendBack();
    },

    setKategoriJamaah($event) {
      this.value.st_kategori_jamaah_id = $event;
      return this.sendBack();
    },

    setStatusJamaah($event) {
      this.value.st_status_jamaah_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>