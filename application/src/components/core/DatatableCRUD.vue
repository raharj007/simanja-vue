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
        <v-toolbar-title>Data {{ $store.state.dtablecrud.title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Tambah Data {{ $store.state.dtablecrud.title }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
<!--                  <v-col v-for="" cols="12" sm="6" md="4">-->
<!--                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>-->
<!--                  </v-col>-->
                </v-row>
              </v-container>
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
        <v-dialog v-model="dialogDelete" max-width="500px">
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
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "DatatableCRUD",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [],
    items: [],
    search: '',
    editedIndex: -1,
    loading: true,
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Tambah Data ' + this.getTitle() : 'Edit Data ' + this.getTitle();
    }
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
    this.setHeader();
    this.initialize();
  },
  methods: {
    ...mapMutations('dtablecrud', ['setEditedItem', 'setDefaultItem']),
    ...mapGetters('dtablecrud', ['getTitle', 'getDataUrl', 'getHeader', 'getDefaultItem']),

    setHeader() {
      this.headers = this.getHeader();
    },

    async initialize() {
      this.loading = true;
      let response = await data(this.getDataUrl());
      if (!response.error) this.items = response.data;
      this.loading = false;
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.setEditedItem(Object.assign({}, item));
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.setEditedItem(Object.assign({}, item));
      this.dialog = true;
    },

    deleteItemConfirm() {
      //request delete item
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.setEditedItem(Object.assign({}, this.getDefaultItem()));
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.setEditedItem(Object.assign({}, this.getDefaultItem()));
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //request edit data
        Object.assign(this.items[this.editedIndex], this.getEditedItem());
      } else {
        //request create data
        this.items.push(this.getEditedItem());
      }
      this.close();
    }
  }
}
</script>

<style scoped>

</style>