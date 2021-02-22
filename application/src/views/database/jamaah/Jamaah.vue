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
import JamaahForm from "@/views/database/jamaah/component/JamaahForm";
export default {
  name: "Jamaah",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Jamaah',
      dataUrl: '/master/jamaah',
      createUrl: '/master/jamaah',
      updateUrl: '/master/jamaah',
      deleteUrl: '/master/jamaah',
      form: JamaahForm,
      headers: [
        {text: 'NIK', value: 'nik'},
        {text: 'Nama', value: 'nama'},
        {text: 'Jenis Kelamin', value: 'jenis_kelamin'},
        {text: 'Tempat Lahir', value: 'tempat_lahir'},
        {text: 'Tanggal Lahir', value: 'f_tanggal_lahir'},
        {text: 'No. HP', value: 'hp'},
        {text: 'Email', value: 'email'},
        {text: 'Alamat', value: 'alamat'},
        {text: 'Kelurahan', value: 'kelurahan'},
        {text: 'Kecamatan', value: 'kecamatan'},
        {text: 'Kabupaten', value: 'kabupaten'},
        {text: 'Provinsi', value: 'provinsi'},
        {text: 'Kelompok', value: 'kelompok'},
        {text: 'Kategori Jamaah', value: 'kategori'},
        {text: 'Status Jamaah', value: 'status'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {
        formIsValid: false,
        nik: '',
        nama: '',
        jenis_kelamin: null,
        tempat_lahir: '',
        tanggal_lahir: '',
        hp: '',
        users_id: null,
        alamat: '',
        kel_id: null,
        kec_id: null,
        kab_id: null,
        provinsi_id: null,
        st_kelompok_id: 0,
        st_kategori_jamaah_id: 0,
        st_status_jamaah_id: 0,
      },
      defaultItem: {
        formIsValid: false,
        nik: '',
        nama: '',
        jenis_kelamin: null,
        tempat_lahir: '',
        tanggal_lahir: '',
        hp: '',
        users_id: null,
        alamat: '',
        kel_id: null,
        kec_id: null,
        kab_id: null,
        provinsi_id: null,
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
