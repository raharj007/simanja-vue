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
import KelurahanForm from "@/views/setup/kelurahan/component/KelurahanForm";

export default {
  name: "Kelurahan",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kelurahan',
      dataUrl: '/setup/kelurahan',
      createUrl: '/setup/kelurahan',
      updateUrl: '/setup/kelurahan',
      deleteUrl: '/setup/kelurahan',
      form: KelurahanForm,
      headers: [
        {text: 'Kode', value: 'id'},
        {text: 'Deskripsi', value: 'nama'},
        {text: 'Kecamatan', value: 'kecamatan'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {formIsValid: false, nama: '', st_kec_id: ''},
      defaultItem: {formIsValid: false, nama: '', st_kec_id: ''},
    },
  }),
}
</script>

<style scoped>

</style>