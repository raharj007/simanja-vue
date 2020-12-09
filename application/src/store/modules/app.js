const app={
  namespaced: true,
  state:()=>({
    navigation: null,
    snackbar: {
      show: false,
      message: "",
      color: ""
    },
    loading: {
      value: false,
      message: "Please wait",
      color: "purple"
    }
  }),
  mutations: {
    toggleNav(state) {
      state.navigation = !state.navigation;
    },
    hideNav(state) {
      if (state.navigation) {
        state.navigation = !state.navigation;
      }
    },
    showSnackbar(state, payload) {
      state.snackbar.message = payload.message;
      state.snackbar.color = payload.color;
      state.snackbar.show = true;
    },
    showLoading(state, payload) {
      state.loading = {
        value: false,
        message: "Please wait",
        color: "purple"
      };
      state.loading = payload;
    }
  },
  getters: {
    getNavigation: state => state.navigation
  },
  actions: {}
}

export default app;
