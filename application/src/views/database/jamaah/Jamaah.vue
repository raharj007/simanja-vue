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
import DatatableCRUD from "@/components/core/DatatableCRUD";
import {mapMutations} from "vuex";

export default {
  name: "Jamaah",
  components: {DatatableCRUD},
  methods: {
    ...mapMutations('dtablecrud', [
      'setTitle',
      'setDataUrl',
      'setHeader',
      'setInput',
      'setEditedItem',
      'setDefaultItem',
      'dtStateClear',
    ]),
  },
  created() {
    this.dtStateClear();
    this.setTitle('Jamaah');
    this.setDataUrl('/showJamaah');
    this.setHeader([
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
    ]);
    this.setEditedItem({nama: ''});
    this.setDefaultItem({nama: ''});
  }
}
</script>

<style scoped>

</style>
