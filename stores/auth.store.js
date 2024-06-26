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
      introductionWritten: false,
      putOnRecommend: false,
    });

    const userIntroduce = ref({
      name: "",
      major: "",
      grade: "",
      sex: "",
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

        // save accessToken in localStorage
        localStorage.setItem("accessToken", userInfo.value.accessToken);

        return true;
      } else {
        console.log("login failed");
        return false;
      }
    }

    async function myPage() {
      console.log("myPage start");
      const response = await authAPI.myPage();

      console.log(response);
      // Error handling
      if (response) {
        console.log("myPage success");
        userInfo.value.username = response.username;
        userInfo.value.nickname = response.nickname;
        userInfo.value.introductionWritten = response.introductionWritten;
        userInfo.value.putOnRecommend = response.putOnRecommend;
        return true;
      } else {
        console.log("myPage failed");
        return false;
      }
    }

    async function putOnRecommend(value) {
      console.log("putOnRecommend start");
      const response = await authAPI.putOnRecommend(value);

      console.log(response);
      // Error handling
      if (response) {
        console.log("putOnRecommend success");
        userInfo.value.putOnRecommend = response.putOnRecommend;
        return true;
      } else {
        console.log("putOnRecommend failed");
        return false;
      }
    }

    async function logout() {
      console.log("logout start");
      // clear userInfo
      userInfo.value.username = "";
      userInfo.value.password = "";
      userInfo.value.nickname = "";
      userInfo.value.accessToken = "";
      userInfo.value.refreshToken = "";
      userInfo.value.introductionWritten = false;
      userInfo.value.putOnRecommend = false;

      // remove accessToken in localStorage
      localStorage.removeItem("accessToken");

      console.log("logout success");
    }

    async function getMyIntroduction() {
      console.log("getMyIntroduction start");
      const response = await authAPI.getMyIntroduction();

      console.log(response);
      // Error handling
      if (response) {
        console.log("getMyIntroduction success");
        return response.introduction;
      } else {
        console.log("getMyIntroduction failed");
        return false;
      }
    }

    async function writeSurvey(data) {
      console.log("writeServey start");
      const response = await authAPI.writeSurvey(data);

      console.log(response);
      // Error handling
      if (response) {
        console.log("writeServey success");
        return true;
      } else {
        console.log("writeServey failed");
        return false;
      }
    }

    async function saveIntroduce(data) {
      console.log("saveIntroduce start");
      const response = await authAPI.saveIntroduce(data);

      console.log(response);
      // Error handling
      if (response) {
        console.log("saveIntroduce success");
        userIntroduce.value.name = response.name;
        userIntroduce.value.major = response.major;
        userIntroduce.value.grade = response.grade;
        userIntroduce.value.sex = response.sex;
        return true;
      } else {
        console.log("saveIntroduce failed");
        return false;
      }
    }

    return {
      userInfo,
      signup,
      login,
      myPage,
      putOnRecommend,
      logout,
      getMyIntroduction,
      writeSurvey,
      saveIntroduce,
    };
  },
  { persist: true }
);
