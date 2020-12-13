<template>
  <v-data-table
      class="elevation-1"
      :search="search"
      :headers="headers"
      :items="items"
      :loading="loading"
      loading-text="Memuat... Mohon tunggu">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Data {{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Tambah Data {{ title }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <component v-bind:is="currentFormComponent" v-model="editedItem"></component>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close">
                Batal
              </v-btn>
              <v-btn color="primary" text @click="save">
                Simpan
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="600px">
          <v-card>
            <v-card-title class="headline">Apakah anda yakin untuk menghapus data ini?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import {data} from "@/repository/crudRepository";
import BaseSetupForm from "@/views/setup/component/BaseSetupForm";
import JamaahForm from "@/views/database/jamaah/component/JamaahForm";

export default {
  name: "DatatableCRUD",
  props: {
    title: {type: String, default: ''},
    dataUrl: {type: String, default: ''},
    createUrl: {type: String, default: ''},
    updateUrl: {type: String, default: ''},
    form: {type: String, default: ''},
    dtHeaders: {type: Array, default: () => {return []}},
    dtEditedItem: {type: Object, default: () => {return {}}},
    dtDefaultItem: {type: Object, default: () => {return {}}},
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    currentForm: '',
    headers: [],
    items: [],
    search: '',
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
    loading: true,
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Tambah Data ' + this.title : 'Edit Data ' + this.title;
    },
    currentFormComponent() {
      return this.currentForm;
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  mounted() {
    this.setFormFromProps();
    this.setHeaderFromProps();
    this.setEditedItemFromProps();
    this.setDefaultItemFromProps();
  },
  methods: {
    setFormFromProps() {
      this.currentForm = this.form;
    },

    setHeaderFromProps() {
      this.headers = this.dtHeaders;
    },

    setEditedItemFromProps() {
      this.editedItem = this.dtEditedItem;
    },

    setDefaultItemFromProps() {
      this.defaultItem = this.dtDefaultItem;
    },

    async initialize() {
      this.loading = true;
      let response = await data(this.dataUrl);
      if (!response.error) this.items = response.data;
      this.loading = false;
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      //request delete item
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //request edit data
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        //request create data
        this.items.push(this.editedItem);
      }
      this.close();
    }
  },
  components: {
    BaseSetupForm,
    JamaahForm,
  }
}
</script>

<style scoped>

</style>