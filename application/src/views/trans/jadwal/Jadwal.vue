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
import JadwalForm from "@/views/trans/jadwal/component/JadwalForm";

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
      form: JadwalForm,
      headers: [
        {text: 'Tanggal', value: 'ftanggal'},
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
      editedItem: {
        formIsValid: false,
        tanggal: '',
        jam_mulai: '',
        jam_selesai: '',
        md_kegiatan_id: '',
      },
      defaultItem: {
        formIsValid: false,
        tanggal: '',
        jam_mulai: '',
        jam_selesai: '',
        md_kegiatan_id: '',
      },
    },
  }),
}
</script>

<style scoped>

</style>