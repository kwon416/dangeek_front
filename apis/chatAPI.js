import HTTP_REQUEST from "./httpRequest";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const baseUrl = config.public.API_BASE_URL;

const chatAPI = {
  async getMyRooms() {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(`${baseUrl}/chatroom/my`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async enterChatroom(roomId) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };

      return HTTP_REQUEST.POST(
        `${baseUrl}/chatroom/enter/${roomId}`,
        null,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async getChatting(roomId) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(
        `${baseUrl}/chatroom/chatting/${roomId}`,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async exitChatroom(roomId) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.POST(
        `${baseUrl}/chatroom/exit/${roomId}`,
        null,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async sendMessage(roomId, message) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      const data = {
        message: message,
      };

      return HTTP_REQUEST.POST(
        `${baseUrl}/chatroom/talk/${roomId}`,
        data,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default chatAPI;
