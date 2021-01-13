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
  name: "Kelompok",
  components: {DatatableCRUD},
  data: () => ({
    dt: {
      title: 'Kepengurusan',
      dataUrl: '/master/kepengurusan',
      createUrl: '/master/kepengurusan/store',
      updateUrl: '',
      deleteUrl: '',
      form: 'KepengurusanForm',
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Deskripsi', value: 'nama'},
        {text: 'Kepengurusan', value: 'kepengurusan'},
        {text: 'Level', value: 'level'},
      ],
      editedItem: {
        formIsValid: false,
        id: '',
        nama: '',
        st_kepengurusan_id: '',
        st_level_id: '',
      },
      defaultItem: {
        formIsValid: false,
        id: '',
        nama: '',
        st_kepengurusan_id: '',
        st_level_id: '',
      },
    },
  }),
}
</script>

<style scoped>

</style>