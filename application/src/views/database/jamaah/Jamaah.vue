<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <DatatableCRUD
            :title="dt.title"
            :data-url="dt.dataUrl"
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
  name: "Jamaah",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Jamaah',
      dataUrl: '/showJamaah',
      form: 'JamaahForm',
      headers: [
        {text: 'Kode', value: 'id'},
        {text: 'NIK', value: 'nik'},
        {text: 'Nama', value: 'nama'},
        {text: 'Jenis Kelamin', value: 'jenis_kelamin'},
        {text: 'Tempat Lahir', value: 'tempat_lahir'},
        {text: 'Tanggal Lahir', value: 'tanggal_lahir'},
        {text: 'No. HP', value: 'hp'},
        {text: 'Alamat', value: 'alamat'},
        {text: 'Provinsi', value: 'provinsi_id'},
        {text: 'Kabupaten', value: 'kab_id'},
        {text: 'Kecamatan', value: 'kec_id'},
        {text: 'Kelurahan', value: 'kel_id'},
        {text: 'ID User', value: 'users_id'},
        {text: 'Kelompok', value: 'st_kelompok_id'},
        {text: 'Kategori Jamaah', value: 'st_kategori_jamaah_id'},
        {text: 'Status Jamaah', value: 'st_status_jamaah_id'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {
        nik: '',
        nama: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        hp: '',
        alamat: '',
        provinsi_id: 0,
        kab_id: 0,
        kec_id: 0,
        kel_id: 0,
        users_id: 0,
        st_kelompok_id: 0,
        st_kategori_jamaah_id: 0,
        st_status_jamaah_id: 0,
      },
      defaultItem: {
        nik: '',
        nama: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        hp: '',
        alamat: '',
        provinsi_id: 0,
        kab_id: 0,
        kec_id: 0,
        kel_id: 0,
        users_id: 0,
        st_kelompok_id: 0,
        st_kategori_jamaah_id: 0,
        st_status_jamaah_id: 0,
      },
    },
  }),
}
</script>

<style scoped>

</style>
