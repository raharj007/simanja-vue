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
import KabupatenForm from "@/views/setup/kabupaten/component/KabupatenForm";

export default {
  name: "Kabupaten",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kabupaten',
      dataUrl: '/setup/kabupaten',
      createUrl: '/setup/kabupaten',
      updateUrl: '/setup/kabupaten',
      deleteUrl: '/setup/kabupaten',
      form: KabupatenForm,
      headers: [
        {text: 'Kode', value: 'id'},
        {text: 'Provinsi', value: 'provinsi'},
        {text: 'Deskripsi', value: 'nama'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {formIsValid: false, nama: '', st_provinsi_id: ''},
      defaultItem: {formIsValid: false, nama: '', st_provinsi_id: ''},
    },
  }),
}
</script>

<style scoped>

</style>
