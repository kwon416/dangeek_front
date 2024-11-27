<template>
  <v-main>
    <v-app-bar class="px-6">
      <div style="height: 60px; margin-left: 14px; margin-top: auto">
        <p class="title">
          <span style="color: #79a1e6; font-size: 20px">{{
            auth.userInfo.nickname
          }}</span>
          님!
        </p>
        <p class="title">자유롭게 채팅해보세요.</p>
      </div>

      <v-spacer></v-spacer>
      <IconNotification @click="router.push('/notification')" />
      <IconMy class="ms-5" @click="router.push('/my')" />
    </v-app-bar>
    <v-container class="pb-0">
      <v-text-field
        class="mt-4"
        rounded="30"
        label="궁금한 것을 적어보세요!"
        bg-color="#e8e8e8"
      >
        <template v-slot:prepend-inner>
          <IconSearch />
        </template>
      </v-text-field>
    </v-container>
    <v-list bg-color="#fff">
      <v-list-item v-for="room in chat.myRooms" :key="room.id" class="px-0">
        <v-card
          rounded="15"
          class="py-0"
          @click="
            router.push({
              path: '/chat/detail',
              query: {
                id: room.id,
                name: room.name,
                currentUsers: room.currentUsers,
                maxUser: room.maxUser,
              },
            })
          "
        >
          <template v-slot:prepend>
            <IconAvatar1 class="me-2" width="50" height="50" />
          </template>
          <template v-slot:title>
            <div class="d-flex">
              <p class="title-t16-medium me-2">{{ room.name }}</p>
              <v-badge color="#FF4841" content="1" inline></v-badge>
            </div>
          </template>
          <template v-slot:subtitle>
            <p class="title-t13-grey mt-2" style="color: #939393">
              참여 인원: {{ room.currentUsers }}/{{ room.maxUser }}
            </p>
          </template>
          <template v-slot:append>
            <p
              class="title-t11-regular"
              style="color: #b2b2b2; margin-top: 20px"
            >
              {{ formatDate(new Date()) }}
            </p>
          </template>
        </v-card>
        <v-divider class="border-opacity-100" color="#E8E8E8" thickness="1" />
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script setup>
import { ref } from "vue";

const auth = useAuthStore();
const router = useRouter();
const chat = useChatStore();

definePageMeta({
  title: "Chat",
  description: "Chat page",
  layout: "home",
});

onMounted(async () => {
  try {
    await auth.myPage();
    await chat.getMyRooms();
  } catch (error) {
    console.error("Failed to fetch user info:", error);
  }
});

function formatDate(date) {
  const now = new Date();
  const targetDate = new Date(date);

  // 같은 날짜인지 확인
  const isToday =
    targetDate.getFullYear() === now.getFullYear() &&
    targetDate.getMonth() === now.getMonth() &&
    targetDate.getDate() === now.getDate();

  if (isToday) {
    // 오늘인 경우 시간만 표시
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } else {
    // 다른 날짜인 경우 년.월.일 형식으로 표시
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }
}

// 현재 시간을 1분마다 업데이트
const currentTime = ref(new Date());
setInterval(() => {
  currentTime.value = new Date();
}, 60000);
</script>

<style lang="scss" scoped>
.title {
  color: #121212;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
}
</style>
