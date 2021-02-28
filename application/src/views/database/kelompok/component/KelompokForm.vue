<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" md="8">
        <v-text-field :rules="rules.id" counter maxlength="3" :value="value.id" @input="setID" label="ID" outlined dense :readonly="isIDReadOnly"></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="desa" item-value="id" item-text="text" :value="value.st_desa_id" @input="setDesa" label="Desa" outlined dense :disabled="endes"></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.nama" @input="setNama" label="Deskripsi" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.alamat" @input="setAlamat" label="Alamat" prepend-inner-icon="mdi-map-marker" outlined dense></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "KelompokForm",
  props: {
    formIsValid: {type: Boolean, default: false},
    value: {type: Object, default: () => {return {}}},
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
        id: [
          value => !!value || 'Kolom ini harus diisi!',
          value => value.length >= 3 || 'Minimal 3 karakter!',
          value => value.length <= 3 || 'Maksimal 3 karakter!',
        ],
      },
      endes: true,
      desa: [],
    }
  },
  computed: {
    isIDReadOnly() {
      return this.value.id !== undefined;
    }
  },
  created() {
    console.log(this.value);
    this.renderSelectDesa();
  },
  methods: {
    async renderSelectDesa() {
      let response = await data('/ref/setup/desa');
      if (!response.error) {
        this.desa = response.data.data;
        this.endes = false;
      }
    },

    checkIsValid() {
      return this.value.id
          && this.value.nama
          && this.value.st_desa_id
          && this.value.alamat
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setID($event) {
      this.value.id = $event;
      return this.sendBack();
    },

    setNama($event) {
      this.value.nama = $event;
      return this.sendBack();
    },

    setDesa($event) {
      this.value.st_desa_id = $event;
      return this.sendBack();
    },

    setAlamat($event) {
      this.value.alamat = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>