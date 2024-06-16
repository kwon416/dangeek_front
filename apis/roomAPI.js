import HTTP_REQUEST from "./httpRequest";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const baseUrl = config.public.API_BASE_URL;

const roomAPI = {
  async getRoomList() {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(`${baseUrl}/post/invite/list`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getDetail(id) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(`${baseUrl}/post/${id}`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default roomAPI;
