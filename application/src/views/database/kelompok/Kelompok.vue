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
import KelompokForm from "@/views/database/kelompok/component/KelompokForm";

export default {
  name: "Kelompok",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kelompok',
      dataUrl: '/master/kelompok',
      createUrl: '/master/kelompok',
      updateUrl: '/master/kelompok',
      deleteUrl: 'master/kelompok',
      form: KelompokForm,
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Deskripsi', value: 'nama'},
        {text: 'Desa', value: 'desa'},
        {text: 'Alamat', value: 'alamat'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {
        formIsValid: false,
        nama: '',
        st_desa_id: '',
        alamat: '',
      },
      defaultItem: {
        formIsValid: false,
        nama: '',
        st_desa_id: '',
        alamat: '',
      },
    },
  }),
}
</script>

<style scoped>

</style>