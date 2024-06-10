import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const userInfo = ref();
  },
  { persist: true }
);
