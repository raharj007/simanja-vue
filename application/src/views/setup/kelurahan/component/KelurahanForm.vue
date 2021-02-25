<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.id" @input="setId" label="Kode" outlined dense :readonly="isIDReadOnly"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.nama" @input="setNama" label="Deskripsi" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-select :rules="rules.required" :items="kecamatan" item-value="id" item-text="text" :value="value.st_kec_id" @input="setKecamatan" label="Kecamatan" outlined dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "KelurahanForm",
  props: {
    value: {type: Object, default: () => {return {}}}
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
      },
      kecamatan: [],
    }
  },
  computed: {
    isIDReadOnly() {
      return this.value.id !== undefined;
    }
  },
  created() {
    this.renderSelectKecamatan();
  },
  methods: {
    async renderSelectKecamatan() {
      let response = await data('/ref/setup/kecamatan');
      if (!response.error) this.kecamatan = response.data.data;
    },

    checkIsValid() {
      return this.value.id && this.value.nama;
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setId($event) {
      this.value.id = $event;
      return this.sendBack();
    },

    setNama($event) {
      this.value.nama = $event;
      return this.sendBack();
    },

    setKecamatan($event) {
      this.value.st_kec_id = $event;
      return this.sendBack();
    }
  }
}
</script>

<style scoped>

</style>