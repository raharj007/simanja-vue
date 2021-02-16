<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-dialog
            ref="dialog"
            v-model="tanggal"
            :return-value.sync="value.tanggal"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                :rules="rules.required"
                :value="value.tanggal"
                @input="setTanggal"
                label="Tanggal"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense>
            </v-text-field>
          </template>
          <v-date-picker
              v-model="value.tanggal"
              scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="red"
                @click="tanggal = false"
            >
              Batal
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(value.tanggal)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-dialog
            ref="dialog01"
            v-model="jamMulai"
            :return-value.sync="value.jam_mulai"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :rules="rules.required"
              :value="value.jam_mulai"
              @input="value.setJamMulai"
              label="Jam Mulai"
              prepend-inner-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
              outlined
              dense
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="jamMulai"
            v-model="value.jam_mulai"
            format="24hr"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="red"
                @click="jamMulai = false"
            >
              Batal
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.dialog01.save(value.jam_mulai)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-dialog
            ref="dialog02"
            v-model="jamSelesai"
            :return-value.sync="value.jam_selesai"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                :rules="rules.required"
                :value="value.jam_selesai"
                @input="value.setJamSelesai"
                label="Jam Selesai"
                prepend-inner-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
            ></v-text-field>
          </template>
          <v-time-picker
              v-if="jamSelesai"
              v-model="value.jam_selesai"
              format="24hr"
              full-width
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="red"
                @click="jamSelesai = false"
            >
              Batal
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.dialog02.save(value.jam_selesai)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-select :rules="rules.required" :items="kegiatan" item-value="id" item-text="text" :value="value.md_kegiatan_id" @input="setKegiatan" label="Kegiatan" outlined dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";

export default {
  name: "JadwalForm",
  props: {
    formIsValid: {type: Boolean, default: false},
    value: {type: Object, default: () => {return {}}},
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
      },
      tanggal: false,
      jamMulai: false,
      jamSelesai: false,
      kegiatan: [],
    }
  },
  created() {
    this.renderSelectKegiatan();
  },
  methods: {
    async renderSelectKegiatan() {
      let response = await data('/ref/master/kegiatan');
      if (!response.error) this.kegiatan = response.data.data;
    },

    checkIsValid() {
      return this.value.tanggal
          && this.value.jam_mulai
          && this.value.jam_selesai
          && this.value.md_kegiatan_id
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setTanggal($event) {
      this.value.tanggal = $event;
      return this.sendBack();
    },

    setJamMulai($event) {
      this.value.jam_mulai = $event;
      return this.sendBack();
    },

    setJamSelesai($event) {
      this.value.jam_selesai = $event;
      return this.sendBack();
    },

    setKegiatan($event) {
      this.value.md_kegiatan_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>