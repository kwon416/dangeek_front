import { defineStore } from "pinia";
import roomAPI from "~/apis/roomAPI";

export const useRoomStore = defineStore(
  "room",
  () => {
    const roomList = ref([]);

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

    return {
      roomList,
      getRoomList,
    };
  },
  { persist: true }
);