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
import KecamatanForm from "@/views/setup/kecamatan/component/KecamatanForm";

export default {
  name: "Kecamatan",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kecamatan',
      dataUrl: '/setup/kecamatan',
      createUrl: '/setup/kecamatan',
      updateUrl: '/setup/kecamatan',
      deleteUrl: '/setup/kecamatan',
      form: KecamatanForm,
      headers: [
        {text: 'Kode', value: 'id'},
        {text: 'Deskripsi', value: 'nama'},
        {text: 'Kabupaten', value: 'kabupaten'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedItem: {formIsValid: false, nama: '', st_kab_id: ''},
      defaultItem: {formIsValid: false, nama: '', st_kab_id: ''},
    },
  }),
}
</script>

<style scoped>

</style>