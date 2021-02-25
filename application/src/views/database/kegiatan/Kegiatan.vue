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
import KegiatanForm from "@/views/database/kegiatan/component/KegiatanForm";

export default {
  name: "Kegiatan",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kegiatan',
      dataUrl: '/master/kegiatan',
      createUrl: '/master/kegiatan',
      updateUrl: '/master/kegiatan',
      deleteUrl: '/master/kegiatan',
      form: KegiatanForm,
      headers: [
        {text: 'Deskripsi', value: 'deskripsi'},
        {text: 'Kelompok', value: 'kelompok'},
        {text: 'Jenis Kegiatan', value: 'jenis_kegiatan'},
        {text: 'Kategori Jamaah', value: 'peserta'},
        {text: 'Level', value: 'level'},
        {text: 'Desa', value: 'desa'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {
        formIsValid: false,
        deskripsi: '',
        md_kelompok_id: '',
        st_jenis_kegiatan_id: '',
        st_kategori_jamaah_id: '',
        st_level_id: '',
        st_desa_id: '',
      },
      defaultItem: {
        formIsValid: false,
        deskripsi: '',
        md_kelompok_id: '',
        st_jenis_kegiatan_id: '',
        st_kategori_jamaah_id: '',
        st_level_id: '',
        st_desa_id: '',
      },
    },
  }),
}
</script>

<style scoped>

</style>