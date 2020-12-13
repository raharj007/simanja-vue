// Lib imports
import Vue from "vue";
import Vuex from "vuex";

// Store functionality
import app from "@/store/modules/app";
import auth from "@/store/modules/auth";

Vue.use(Vuex);

// Create a new store
let store = new Vuex.Store({
  modules:{
    auth,
    app,
  }
});

export default store;
