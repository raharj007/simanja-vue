<template>
  <v-container fill-height fluid>
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
  name: "Kegiatan",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kegiatan',
      dataUrl: '/master/kegiatan',
      createUrl: '/master/kegiatan/store',
      updateUrl: '',
      deleteUrl: '',
      form: 'KegiatanForm',
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Deskripsi', value: 'deskripsi'},
        {text: 'Level', value: 'level'},
        {text: 'Kelompok', value: 'kelompok'},
        {text: 'Desa', value: 'desa'},
        {text: 'Jenis Kegiatan', value: 'jenis_kegiatan'},
        {text: 'Peserta', value: 'peserta'},
      ],
      editedItem: {
        formIsValid: false,
        id: '',
        deskripsi: '',
        st_level_id: '',
        st_jenis_kegiatan_id: '',
        st_kategori_jamaah_id: '',
        st_desa_id: '',
        md_kelompok_id: '',
      },
      defaultItem: {
        formIsValid: false,
        id: '',
        deskripsi: '',
        st_level_id: '',
        st_jenis_kegiatan_id: '',
        st_kategori_jamaah_id: '',
        st_desa_id: '',
        md_kelompok_id: '',
      },
    },
  }),
}
</script>

<style scoped>

</style>