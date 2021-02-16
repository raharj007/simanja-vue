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

export default {
  name: "Kepengurusan",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kepengurusan',
      dataUrl: '/trans/kepengurusan',
      createUrl: '/trans/kepengurusan',
      updateUrl: '/trans/kepengurusan',
      deleteUrl: '/trans/kepengurusan',
      form: '',
      headers: [
        {text: 'NIK', value: 'md_jamaah_nik'},
        {text: 'Nama Jamaah', value: 'nama_jamaah'},
        {text: 'Kepengurusan', value: 'nama'},
        {text: 'Kategori', value: 'kategori'},
        {text: 'Level', value: 'level'},
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