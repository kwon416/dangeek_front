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
  async login(username, password) {
    try {
      const body = {
        username: username,
        password: password,
      };
      return HTTP_REQUEST.POST(`${baseUrl}/auth/login`, body);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async myPage() {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(`${baseUrl}/member/mypage`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async putOnRecommend(value) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      const state = value ? "release" : "hold";
      return HTTP_REQUEST.GET(`${baseUrl}/member/${state}`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getMyIntroduction() {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };

      return HTTP_REQUEST.GET(`${baseUrl}/member/myintroduction`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async writeSurvey(data) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };

      const body = {
        cleanliness: {
          answer1: data.q1,
          answer2: data.q2,
          answer3: data.q3,
          answer4: data.q4,
          answer5: data.q5,
          answer6: data.q6,
          answer7: data.q7,
          answer8: data.q8,
          answer9: data.q9,
          answer10: data.q10,
        },
        wakeTime: data.q11,
        sleepTime: data.q12,
        hobbies: data.q13,
      };

      return HTTP_REQUEST.POST(`${baseUrl}/member/write/survey`, body, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default authAPI;
