<template>
  <v-main style="background-color: #838383">
    <v-app-bar class="px-3" style="background-color: #838383; margin-left: 4px">
      <IconAvatar1 :width="32" :height="32" />
      <p
        class="ms-2"
        style="
          color: #fff;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Pretendard;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        "
      >
        name
      </p>
      <v-spacer></v-spacer>
      <v-btn icon @click="router.back()" class="me-0">
        <IconClose />
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-card
        class="px-6 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">이름</span>
              <span>{{ recommendData.name }}</span>
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">학과</span>
              <span>{{ recommendData.major }}</span>
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">학년</span>
              <span>{{ recommendData.grade }}</span>
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">성별</span>
              <span>{{ recommendData.sex }}</span>
            </p>
          </div>
        </div>
      </v-card>
      <v-card
        class="px-10 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: center">
            <p class="title" style="line-height: 15px; padding-bottom: 6px">
              생활 습관 및 성향
            </p>
          </div>
          <div
            class="d-flex pt-1"
            style="flex-wrap: wrap; justify-content: center; gap: 14px 17px"
          >
            <CustomChip
              v-for="personality in recommendData.personality"
              :key="personality"
              :text="personality"
            />
          </div>
        </div>
      </v-card>
      <v-card
        class="px-10 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: center">
            <p class="title" style="line-height: 15px; padding-bottom: 6px">
              취미 및 관심사
            </p>
          </div>
          <div
            class="d-flex pt-1"
            style="flex-wrap: wrap; justify-content: center; gap: 14px 17px"
          >
            <CustomChip
              v-for="hobby in recommendData.hobbies"
              :key="hobby"
              :text="hobby"
            />
          </div>
        </div>
      </v-card>

      <div style="height: 93px"></div>
    </v-container>
    <div class="pb-10 bottom-btn-wrapper">
      <v-btn
        block
        class="v-btn__gradient"
        rounded="15"
        height="53"
        @click="handleChatRequest"
      >
        <p class="title-t18-bold">채팅 신청하기</p>
      </v-btn>
    </div>
  </v-main>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const chat = useChatStore();

const hobbiesMap = {
  game: "게임",
  sports: "운동",
  read: "독서",
  art: "예술",
  movie: "영화",
  collect: "수집",
  craft: "공예",
  observe: "관찰",
  travel: "여행",
  music: "음악",
  cook: "요리",
  photo: "사진",
};

// URL 쿼리에서 데이터 가져오기
const recommendData = {
  id: route.query.id,
  name: route.query.name,
  contents: route.query.contents,
  grade: route.query.grade,
  major: route.query.major,
  sex: route.query.sex,
  personality: route.query.personality?.split(",") || [],
  hobbies: (route.query.hobbies?.split(",") || []).map(
    (hobby) => hobbiesMap[hobby] || hobby
  ),
};

async function handleChatRequest() {
  try {
    // const roomId = await chat.enterChatroom(recommendData.id);
    const roomId = false;
    if (roomId) {
      await router.push("/chat");
      await router.push(`/chat/detail/${roomId}`);
    } else {
      console.error("채팅방 생성에 실패했습니다.");
    }
  } catch (error) {
    console.error("채팅 신청 중 오류가 발생했습니다:", error);
  }
}
</script>

<style lang="scss" scoped>
span {
  color: #121212;
  text-align: justify;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
}

.bottom-btn-wrapper {
  width: 100%;
  padding: 0 24px;
  background-color: #838383;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.title {
  color: #79a1e6;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}
</style>
