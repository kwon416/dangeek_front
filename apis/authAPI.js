import Signup from "~/pages/login/signup.vue";
import HTTP_REQUEST from "./httpRequest";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const baseUrl = config.public.API_BASE_URL;

const authAPI = {
  async signup(username, password, nickname) {
    try {
      const body = {
        username: username,
        password: password,
        nickname: nickname,
      };
      return HTTP_REQUEST.POST(`${baseUrl}/auth/signup`, body);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default authAPI;
