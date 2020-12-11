<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <DatatableCRUD />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import DatatableCRUD from "@/components/core/DatatableCRUD";

export default {
  name: "Kelompok",
  components: {DatatableCRUD},
  methods: {
    ...mapMutations('dtablecrud', ['setTitle', 'setDataUrl', 'setHeader', 'setInput', 'setEditedItem', 'setDefaultItem']),
    ...mapGetters('dtablecrud', ['getEditedItem']),
  },
  created() {
    this.setTitle('Kelompok');
    this.setDataUrl('/showStKelompok');
    this.setHeader([
      {text: 'Kode', value: 'id'},
      {text: 'Deskripsi', value: 'nama'},
      {text: 'Actions', value: 'actions', sortable: false},
    ]);
    // this.setInput([
    //   {model: this.getEditedItem().}
    // ]);
    this.setEditedItem({nama: ''});
    this.setDefaultItem({nama: ''});
  }
}
</script>

<style scoped>

</style>