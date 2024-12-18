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

      const body = data;
      console.log(body);
      return HTTP_REQUEST.POST(`${baseUrl}/member/write/survey`, body, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async saveIntroduce(data) {
    try {
      console.log(data);
      console.dir(data);
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };

      const body = {
        name: data.name,
        major: data.major,
        grade: data.grade,
        sex: data.sex,
        contents: data.contents,
        personality: data.personality,
        hobbies: data.hobbies,
      };

      return HTTP_REQUEST.POST(
        `${baseUrl}/member/write/introduction`,
        body,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async verifyEmail(email) {
    try {
      const body = {
        username: email,
      };
      return HTTP_REQUEST.POST(`${baseUrl}/auth/univ_certify`, body);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async certifyCode(email, code) {
    try {
      const body = {
        username: email,
        code: code,
      };
      return HTTP_REQUEST.POST(`${baseUrl}/auth/univ_certify_code`, body);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getRecommend() {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(`${baseUrl}/member/recommend`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default authAPI;
