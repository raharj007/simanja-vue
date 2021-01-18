import router from "./router";
import store from "./store";
import {getInfo} from "@/repository/authRepository";

function checkCredentials() {
  return new Promise(resolve => {
    // console.log("TOKEN",store.getters['auth/getToken'][1]);
    if (store.getters['auth/getToken']) {
      getInfo()
        .then( response => {
          store.commit("auth/setProfile", response.data);
          resolve(response.data);
        })
        .catch(() => {
          console.log("JWT not valid, please relogin");
          resolve(false);
        });
    } else {
      resolve(false);
    }
  });
}
const whiteList = ["/login"];

router.beforeEach(async (to, from, next)=>{
  if (await checkCredentials()){
    if (to.path === "/login") {
      next({ path: "/home" });
    }else{
      next();
    }
  }else{
    if(whiteList.indexOf(to.path) > -1){
      next();
    }else{
      next({path:"/login"})
    }
  }
})
