import { defineStore } from "pinia";
import authAPI from "~/apis/authAPI";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const userInfo = ref({
      username: "",
      password: "",
      nickname: "",
      accessToken: "",
      refreshToken: "",
    });

    async function signup(username, password, nickname) {
      console.log("signup start");
      const response = await authAPI.signup(username, password, nickname);

      console.log(response);
      // Error handling
      if (response) {
        console.log("signup success");
        userInfo.value.username = response.username;
        userInfo.value.nickname = response.nickname;
        return true;
      } else {
        console.log("signup failed");
        return false;
      }
    }

    async function login(username, password) {
      console.log("login start");
      const response = await authAPI.login(username, password);

      console.log(response);
      // Error handling
      if (response) {
        console.log("login success");
        userInfo.value.accessToken = response.accessToken;
        userInfo.value.refreshToken = response.refreshToken;
        return true;
      } else {
        console.log("login failed");
        return false;
      }
    }

    return {
      userInfo,
      signup,
      login,
    };
  },
  { persist: true }
);
