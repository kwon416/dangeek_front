import HTTP_REQUEST from "./httpRequest";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const baseUrl = config.public.API_BASE_URL;

const complainAPI = {
  // 민원 생성
  async createComplain(data) {
    try {
      const headers = {
        Authorization: `Bearer ${useAuthStore().userInfo.accessToken}`,
      };
      return HTTP_REQUEST.POST(
        `${baseUrl}/post/complain/create`,
        data,
        headers
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default complainAPI;
