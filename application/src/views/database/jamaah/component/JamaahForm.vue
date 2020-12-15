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
        <v-select :rules="rules.required" :items="jenisKelamin" :value="value.jenis_kelamin" @input="setJenisKelamin" label="Jenis Kelamin" outlined dense></v-select>
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
                prepend-icon="mdi-calendar"
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
        <v-text-field :rules="rules.required" :value="value.alamat" @input="setAlamat" label="Alamat" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.kel_id" @input="setKelurahan" label="Kelurahan" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.kec_id" @input="setKecamatan" label="Kecamatan" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.kab_id" @input="setKabupaten" label="Kabupaten" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field :rules="rules.required" :value="value.provinsi_id" @input="setProvinsi" label="Provinsi" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.st_kelompok_id" @input="setKelompok" label="Kelompok" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.st_kategori_jamaah_id" @input="setKategoriJamaah" label="Kategori" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field :rules="rules.required" :value="value.st_status_jamaah_id" @input="setStatusJamaah" label="Status" outlined dense></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
      jenisKelamin: ['Laki-laki', 'Perempuan'],
      tglLahir: false,
    }
  },
  methods: {
    checkIsValid() {
      return this.value.nik
          && this.value.nama
          && this.value.jenis_kelamin
          && this.value.tempat_lahir
          && this.value.tanggal_lahir
          && this.value.hp
          && this.value.alamat
          && this.value.kel_id
          && this.value.kec_id
          && this.value.kab_id
          && this.value.provinsi_id
          && this.value.st_kelompok_id
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
      this.value.kel_id = $event;
      return this.sendBack();
    },

    setKecamatan($event) {
      this.value.kec_id = $event;
      return this.sendBack();
    },

    setKabupaten($event) {
      this.value.kab_id = $event;
      return this.sendBack();
    },

    setProvinsi($event) {
      this.value.provinsi_id = $event;
      return this.sendBack();
    },

    setKelompok($event) {
      this.value.st_kelompok_id = $event;
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