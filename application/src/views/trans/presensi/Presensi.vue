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
  name: "Presensi",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Presensi',
      dataUrl: '/trans/presensi',
      createUrl: '/trans/presensi',
      updateUrl: '/trans/presensi',
      deleteUrl: '/trans/presensi',
      form: '',
      headers: [
        {text: 'Tanggal', value: 'tanggal'},
        {text: 'NIK', value: 'md_jamaah_nik'},
        {text: 'Nama Jamaah', value: 'nama_jamaah'},
        {text: 'Status Hadir', value: 'st_status_kehadiran_id'},
        {text: 'Jam Mulai', value: 'jam_mulai'},
        {text: 'Jam Selesai', value: 'jam_selesai'},
        {text: 'Jam Hadir', value: 'jam_kehadiran'},
        {text: 'Keterangan', value: 'keterangan'},
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