import { defineStore } from "pinia";
import authAPI from "~/apis/authAPI";
import groupAPI from "~/apis/groupAPI";

export const useGroupStore = defineStore(
  "group",
  () => {
    const groupList = ref([]);

    const groupDetail = ref({
      title: "",
      contents: "",
      userId: 0,
      Link: "",
      mallName: "",
      item: "",
      price: "",
      imageUrl: "",
      chatRoomResponse: {
        currentUsers: 0,
        id: 0,
        maxUsers: 0,
        name: "",
      },
    });

    async function getGroupList() {
      console.log("getGroupList start");
      const response = await groupAPI.getGroupList();

      console.log(response);
      // Error handling
      if (response) {
        console.log("getGroupList success");
        groupList.value = response;
        return true;
      } else {
        console.log("getGroupList failed");
        return false;
      }
    }

    async function getGroupDetail(groupId) {
      console.log("getGroupDetail start");
      const response = await groupAPI.getGroupDetail(groupId);

      console.log(response);
      // Error handling
      if (response) {
        console.log("getGroupDetail success");
        groupDetail.value = response;
        return true;
      } else {
        console.log("getGroupDetail failed");
        return false;
      }
    }

    async function createGroup(data) {
      console.log("createGroup start");
      const response = await groupAPI.createGroup(data);

      console.log(response);
      // Error handling
      if (response) {
        console.log("createGroup success");
        return true;
      } else {
        console.log("createGroup failed");
        return false;
      }
    }

    return {
      groupList,
      groupDetail,
      getGroupList,
      getGroupDetail,
      createGroup,
    };
  },
  { persist: true }
);
