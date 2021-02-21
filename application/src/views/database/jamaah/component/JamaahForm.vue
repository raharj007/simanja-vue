<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field type="number" :rules="rules.nik" counter maxlength="16" :value="value.nik" @input="setNIK" label="NIK" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-text-field :rules="rules.required" :value="value.nama" @input="setNama" label="Nama" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="jenisKelamin" item-value="id" item-text="text" :value="value.jenis_kelamin" @input="setJenisKelamin" label="Jenis Kelamin" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.tempat_lahir" @input="setTempatLahir" label="Tempat Lahir" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-dialog
            ref="dialog"
            v-model="tglLahir"
            :return-value.sync="value.tanggal_lahir"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                :rules="rules.required"
                :value="value.tanggal_lahir"
                @input="setTglLahir"
                label="Tgl Lahir"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense>
            </v-text-field>
          </template>
          <v-date-picker
              v-model="value.tanggal_lahir"
              scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="red"
                @click="tglLahir = false"
            >
              Batal
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(value.tanggal_lahir)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.hp" @input="setNoHp" label="No. Hp" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.alamat" @input="setAlamat" label="Alamat" prepend-inner-icon="mdi-map-marker" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="provinsi" item-value="id" item-text="text" :value="value.st_provinsi_id" @input="setProvinsi" @change="provinsiChange" label="Provinsi" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kabupaten" item-value="id" item-text="text" :value="value.st_kab_id" @input="setKabupaten" @change="kabupatenChange" label="Kabupaten" ref="selectedKab" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kecamatan" item-value="id" item-text="text" :value="value.st_kec_id" @input="setKecamatan" @change="kecamatanChange" label="Kecamatan" ref="selectedKec" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select :rules="rules.required" :items="kelurahan" item-value="id" item-text="text" :value="value.st_kel_id" @input="setKelurahan" label="Kelurahan" ref="selectedKel" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="kelompok" item-value="id" item-text="text" :value="value.md_kelompok_id" @input="setKelompok" label="Kelompok" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="kategori" item-value="id" item-text="text" :value="value.st_kategori_jamaah_id" @input="setKategoriJamaah" label="Kategori" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :rules="rules.required" :items="status" item-value="id" item-text="text" :value="value.st_status_jamaah_id" @input="setStatusJamaah" label="Status" outlined dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {data} from "@/repository/dataRepository";
 
export default {
  name: "JamaahForm",
  props: {
    formIsValid: {type: Boolean, default: false},
    value: {type: Object, default: () => {return {}}},
  },
  data() {
    return {
      rules: {
        required: [value => !!value || 'Kolom ini harus diisi!'],
        nik: [
            value => !!value || 'Kolom ini harus diisi!',
            value => value.length >= 16 || 'Minimal 16 karakter!',
            value => value.length <= 16 || 'Maksimal 16 karakter!',
        ],
      },
      jenisKelamin: [
        {id: 'Laki-laki', text: 'Laki-laki'},
        {id: 'Perempuan', text: 'Perempuan'},
      ],
      tglLahir: false,
      kelurahan: [],
      kecamatan: [],
      kabupaten: [],
      provinsi: [],
      kelompok: [],
      kategori: [],
      status: [],
    }
  },
  created() {
    this.renderSelectProvinsi();
    this.renderSelectKelompok();
    this.renderSelectKategori();
    this.renderSelectStatus();
  },
  methods: {
    async renderSelectKelurahan(kec) {
      let response = await data(`/ref/setup/kelurahan/${kec}`);
      if (!response.error) this.kelurahan = response.data.data;
    },

    async renderSelectKecamatan(kab) {
      let response = await data(`/ref/setup/kecamatan/${kab}`);
      if (!response.error) this.kecamatan = response.data.data;
    },

    async renderSelectKabupaten(prov) {
      let response = await data(`/ref/setup/kabupaten/${prov}`);
      if (!response.error) this.kabupaten = response.data.data;
    },

    async renderSelectProvinsi() {
      let response = await data('/ref/setup/provinsi');
      if (!response.error) this.provinsi = response.data.data;
    },

    async renderSelectKelompok() {
      let response = await data('/ref/master/kelompok');
      if (!response.error) this.kelompok = response.data.data;
    },

    async renderSelectKategori() {
      let response = await data('/ref/setup/kategori-jamaah');
      if (!response.error) this.kategori = response.data.data;
    },

    async renderSelectStatus() {
      let response = await data('/ref/setup/status-jamaah');
      if (!response.error) this.status = response.data.data;
    },

    provinsiChange() {
      this.$refs['selectedKab'].reset();
      this.$refs['selectedKec'].reset();
      this.$refs['selectedKel'].reset();
      this.renderSelectKabupaten(this.value.st_provinsi_id);
    },

    kabupatenChange() {
      this.$refs['selectedKec'].reset();
      this.$refs['selectedKel'].reset();
      this.renderSelectKecamatan(this.value.st_kab_id);
    },

    kecamatanChange() {
      this.$refs['selectedKel'].reset();
      this.renderSelectKelurahan(this.value.st_kec_id);
    },

    checkIsValid() {
      return this.value.nik
          && this.value.nama
          && this.value.jenis_kelamin
          && this.value.tempat_lahir
          && this.value.tanggal_lahir
          && this.value.hp
          && this.value.alamat
          && this.value.st_kel_id
          && this.value.st_kec_id
          && this.value.st_kab_id
          && this.value.st_provinsi_id
          && this.value.md_kelompok_id
          && this.value.st_kategori_jamaah_id
          && this.value.st_status_jamaah_id
    },

    sendBack() {
      this.value.formIsValid = this.checkIsValid();
      return this.$emit('input', this.value);
    },

    setNIK($event) {
      this.value.nik = $event;
      return this.sendBack();
    },

    setNama($event) {
      this.value.nama = $event;
      return this.sendBack();
    },

    setJenisKelamin($event) {
      this.value.jenis_kelamin = $event;
      return this.sendBack();
    },

    setTempatLahir($event) {
      this.value.tempat_lahir = $event;
      return this.sendBack();
    },

    setTglLahir($event) {
      this.value.tanggal_lahir = $event;
      return this.sendBack();
    },

    setNoHp($event) {
      this.value.hp = $event;
      return this.sendBack();
    },

    setAlamat($event) {
      this.value.alamat = $event;
      return this.sendBack();
    },

    setKelurahan($event) {
      this.value.st_kel_id = $event;
      return this.sendBack();
    },

    setKecamatan($event) {
      this.value.st_kec_id = $event;
      return this.sendBack();
    },

    setKabupaten($event) {
      this.value.st_kab_id = $event;
      return this.sendBack();
    },

    setProvinsi($event) {
      this.value.st_provinsi_id = $event;
      return this.sendBack();
    },

    setKelompok($event) {
      this.value.md_kelompok_id = $event;
      return this.sendBack();
    },

    setKategoriJamaah($event) {
      this.value.st_kategori_jamaah_id = $event;
      return this.sendBack();
    },

    setStatusJamaah($event) {
      this.value.st_status_jamaah_id = $event;
      return this.sendBack();
    },
  },
}
</script>

<style scoped>

</style>