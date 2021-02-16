<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <DatatableCRUD
            :title="dt.title"
            :data-url="dt.dataUrl"
            :create-url="dt.createUrl"
            :update-url="dt.updateUrl"
            :delete-url="dt.deleteUrl"
            :form="dt.form"
            :dt-headers="dt.headers"
            :dt-edited-item="dt.editedItem"
            :dt-default-item="dt.defaultItem"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatatableCRUD from "@/components/core/DatatableCRUD";

export default {
  name: "Jadwal",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Jadwal',
      dataUrl: '/trans/jadwal',
      createUrl: '/trans/jadwal',
      updateUrl: '/trans/jadwal',
      deleteUrl: '/trans/jadwal',
      form: '',
      headers: [
        {text: 'Tanggal', value: 'tanggal'},
        {text: 'Jam Mulai', value: 'jam_mulai'},
        {text: 'Jam Selesai', value: 'jam_selesai'},
        {text: 'Kegiatan', value: 'kegiatan'},
        {text: 'Level', value: 'level'},
        {text: 'Kelompok', value: 'kelompok'},
        {text: 'Desa', value: 'desa'},
        {text: 'Jenis Kegiatan', value: 'jenis_kegiatan'},
        {text: 'Peserta', value: 'peserta'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {formIsValid: false, nama: ''},
      defaultItem: {formIsValid: false, nama: ''},
    },
  }),
}
</script>

<style scoped>

</style>