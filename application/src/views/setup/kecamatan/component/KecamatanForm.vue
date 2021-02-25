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
        <v-select :rules="rules.required" :items="kabupaten" item-value="id" item-text="text" :value="value.st_kab_id" @input="setKabupaten" label="Kabupaten" outlined dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "KecamatanForm",
  props: {
    value: {type: Object, default: () => {return {}}}
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
      },
      kabupaten: [],
    }
  },
  computed: {
    isIDReadOnly() {
      return this.value.id !== undefined;
    }
  },
  created() {
    this.renderSelectKabupaten();
  },
  methods: {
    async renderSelectKabupaten() {
      let response = await data('/ref/setup/kabupaten');
      if (!response.error) this.kabupaten = response.data.data;
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

    setKabupaten($event) {
      this.value.st_kab_id = $event;
      return this.sendBack();
    }
  }
}
</script>

<style scoped>

</style>