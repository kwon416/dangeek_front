import HTTP_REQUEST from "./httpRequest";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const baseUrl = config.public.API_BASE_URL;

const groupAPI = {
  async getGroupList() {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.GET(`${baseUrl}/post/group_buy/list`, headers);
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getGroupDetail(id) {
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

  async createGroup(data) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };

      return HTTP_REQUEST.POST(
        `${baseUrl}/post/group_buy/create`,
        data,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default groupAPI;
