<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field v-bind:value="value.nik" v-on:input="$emit('input', $event.target.value)" label="NIK"></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-text-field v-bind:value="value.nama" v-on:input="$emit('input', $event.target.value)" label="Nama"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.jenis_kelamin" v-on:input="$emit('input', $event.target.value)" label="Jenis Kelamin"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.tempat_lahir" v-on:input="$emit('input', $event.target.value)" label="Tempat Lahir"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.tanggal_lahir" v-on:input="$emit('input', $event.target.value)" label="Tgl Lahir"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.hp" v-on:input="$emit('input', $event.target.value)" label="No. Hp"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field v-bind:value="value.alamat" v-on:input="$emit('input', $event.target.value)" label="Alamat"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.kel_id" v-on:input="$emit('input', $event.target.value)" label="Kelurahan"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.kec_id" v-on:input="$emit('input', $event.target.value)" label="Kecamatan"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.kab_id" v-on:input="$emit('input', $event.target.value)" label="Kabupaten"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field v-bind:value="value.provinsi_id" v-on:input="$emit('input', $event.target.value)" label="Provinsi"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.st_kelompok_id" v-on:input="$emit('input', $event.target.value)" label="Kelompok"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.st_kategori_jamaah_id" v-on:input="$emit('input', $event.target.value)" label="Kategori"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field v-bind:value="value.st_status_jamaah_id" v-on:input="$emit('input', $event.target.value)" label="Status"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JamaahForm",
  props: ['value'],
}
</script>

<style scoped>

</style>