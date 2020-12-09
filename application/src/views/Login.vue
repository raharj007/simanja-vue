<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar flat>
            <v-spacer></v-spacer>
              <v-card-title>Sistem Management Jamaah</v-card-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.native.enter="submitLogin">
              <v-text-field
                  label="Email"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="email"
              />

              <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-5 pr-5">
            <v-spacer />
            <v-btn color="primary" @click.stop.prevent="submitLogin"
            >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {login} from "@/repository/authRepository";
import {mapMutations} from "vuex";

export default {
  name: "Login",
  data:() => ({
    email: null,
    password: null,
  }),
  methods: {
    ...mapMutations('app',['showSnackbar']),
    ...mapMutations('auth',['setProfile',"setToken"]),
    async submitLogin(){
      let response = await login({email:this.email, password: this.password})
      if(!response.error){
        console.log(response);
        this.setToken(response.data.token.access_token);
        this.setProfile(response.data.profile);
        this.showSnackbar({
          message:'Login Succeed',
          color: 'success'
        })
        await this.$router.push({ path: "/home" });
      }else{
        this.showSnackbar({
          message: response.message,
          color: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
