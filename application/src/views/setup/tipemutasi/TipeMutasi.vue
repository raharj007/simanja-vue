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
import BaseSetupForm from "@/views/setup/component/BaseSetupForm";

export default {
  name: "TipeMutasi",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'TipeMutasi',
      dataUrl: '/setup/tipe-mutasi',
      createUrl: '/setup/tipe-mutasi',
      updateUrl: '/setup/tipe-mutasi',
      deleteUrl: '/setup/tipe-mutasi',
      form: BaseSetupForm,
      headers: [
        {text: 'Kode', value: 'id'},
        {text: 'Deskripsi', value: 'nama'},
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