const auth = {
  namespaced: true,
  state:()=> ({
    token: null,
    profile: null
  }),
  mutations:{
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", state.token);
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    clearAll(state) {
      localStorage.clear();
      state.token = null;
      state.profile = null;
    }
  },
  getters: {
    getToken: state => {
      if (state.token == null) {
        state.token = localStorage.getItem("token");
      }
      return state.token;
    },
    getProfile: state => state.profile
  },
  actions: {}
}

export default auth;
