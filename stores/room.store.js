import { defineStore } from "pinia";
import roomAPI from "~/apis/roomAPI";

export const useRoomStore = defineStore(
  "room",
  () => {
    const roomList = ref([]);

    const roomDetail = ref({
      post_id: 0,
      memberId: 0,
      title: "",
      contents: "",
      nickname: "",
      post_type: "",
      memberIntrouction: {
        name: "",
        major: "",
        grade: "",
        sex: "",
      },
      chatRoomResponse: {
        id: 0,
        name: "",
        currentUsers: 0,
        maxUser: 0,
      },
    });

    async function getRoomList() {
      console.log("getRoomList start");
      const response = await roomAPI.getRoomList();

      console.log(response);
      // Error handling
      if (response) {
        console.log("getRoomList success");
        roomList.value = response;
        return true;
      } else {
        console.log("getRoomList failed");
        return false;
      }
    }

    async function getDetail(id) {
      console.log("getDetail start");
      const response = await roomAPI.getDetail(id);

      console.log(response);
      // Error handling
      if (response) {
        console.log("getDetail success");

        return response;
      } else {
        console.log("getDetail failed");
        return false;
      }
    }

    async function writeRoom(data) {
      console.log("writeRoom start");
      const response = await roomAPI.writeRoom(data);

      console.log(response);
      // Error handling
      if (response) {
        console.log("writeRoom success");

        return true;
      } else {
        console.log("writeRoom failed");
        return false;
      }
    }

    return {
      roomList,
      getRoomList,
      getDetail,
      writeRoom,
    };
  },
  { persist: true }
);
