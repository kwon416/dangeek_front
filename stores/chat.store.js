import { defineStore } from "pinia";
import chatAPI from "~/apis/chatAPI";

export const useChatStore = defineStore(
  "chat",
  () => {
    const myRooms = ref([]);
    const currentRoom = ref({
      id: 0,
      name: "",
      currentUsers: 0,
      maxUser: 0,
    });

    async function getMyRooms() {
      console.log("getMyRooms start");
      const response = await chatAPI.getMyRooms();

      console.log(response);
      if (response) {
        console.log("getMyRooms success");
        myRooms.value = response;
        return true;
      } else {
        console.log("getMyRooms failed");
        return false;
      }
    }

    // 채팅 내역 가져오기
    async function getChatting(id) {
      console.log(" getChatting start");
      const response = await chatAPI.getChatting(id);

      console.log(response);
      if (response) {
        console.log(" getChatting success");
        currentRoom.value = response;
        return response;
      } else {
        console.log(" getChatting failed");
        return false;
      }
    }

    async function sendMessage(roomId, message) {
      console.log("sendMessage start");
      const response = await chatAPI.sendMessage(roomId, message);

      console.log(response);
      if (response) {
        console.log("sendMessage success");
        return true;
      } else {
        console.log("sendMessage failed");
        return false;
      }
    }

    async function enterChatroom(roomId) {
      const response = await chatAPI.enterChatroom(roomId);
      console.log(response);

      if (response) {
        console.log("enterChatroom success");
        return response.roomId;
      } else {
        console.log("enterChatroom failed");
        return false;
      }
    }

    async function exitChatroom(roomId) {
      const response = await chatAPI.exitChatroom(roomId);
      console.log(response);

      if (response) {
        console.log("exitChatroom success");
        return true;
      } else {
        console.log("exitChatroom failed");
        return false;
      }
    }

    return {
      myRooms,
      currentRoom,
      getMyRooms,
      getChatting,
      sendMessage,
      enterChatroom,
      exitChatroom,
    };
  },
  { persist: true }
);
