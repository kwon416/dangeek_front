import { defineStore } from "pinia";
import complainAPI from "~/apis/complainAPI";

export const useComplainStore = defineStore("complain", () => {
  const complainList = ref([]);

  async function getComplainList() {
    console.log("getComplainList start");
    const response = await complainAPI.getComplainList();

    console.log(response);
    // Error handling
    if (response) {
      console.log("getComplainList success");
      complainList.value = response;
      return true;
    } else {
      console.log("getComplainList failed");
      return false;
    }
  }

  async function createComplain(data) {
    console.log("createComplain start");
    console.log(data);
    const response = await complainAPI.createComplain(data);

    console.log(response);
    // Error handling
    if (response) {
      console.log("createComplain success");
      return true;
    } else {
      console.log("createComplain failed");
      return false;
    }
  }

  async function getComplainDetail(id) {
    console.log("getComplainDetail start");
    const response = await complainAPI.getComplainDetail(id);

    console.log(response);
    // Error handling
    if (response) {
      console.log("getComplainDetail success");
      return response;
    } else {
      console.log("getComplainDetail failed");
      return false;
    }
  }

  return {
    complainList,
    getComplainList,
    createComplain,
    getComplainDetail,
  };
});
