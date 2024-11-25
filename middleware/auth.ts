import { useAuthStore } from "~/stores/auth.store";

export default defineNuxtRouteMiddleware((to) => {
  const publicPages = ["/login", "/login/signup", "/login/findPassword"];
  const isPublicPage = publicPages.includes(to.path);
  console.log("middleware 실행");

  if (process.client) {
    const auth = useAuthStore();
    const userInfo = auth.userInfo;

    // 로그인이 필요한 페이지이고 userInfo가 비어있거나 토큰이 없는 경우
    if (!isPublicPage && (!userInfo || !userInfo.accessToken)) {
      alert("로그인이 필요한 서비스입니다.");
      return navigateTo("/login");
    }
  }
});
