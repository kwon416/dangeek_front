<template>
  <v-main>
    <v-app-bar class="px-6">
      <IconConfetti />
      <div style="height: 60px; margin-left: 14px; margin-top: auto">
        <p class="title">
          <span style="color: #79a1e6; font-size: 20px">{{
            auth.userInfo.nickname
          }}</span>
          님을 위한
        </p>
        <p class="title">룸메이트 추천!</p>
      </div>

      <v-spacer></v-spacer>
      <IconNotification @click="router.push('/notification')" />
      <IconMy class="ms-5" @click="router.push('/my')" />
    </v-app-bar>
    <v-slide-group
      v-if="auth.userInfo.introductionWritten && auth.userInfo.surveyDone"
      :show-arrows="false"
      class="mt-9 mb-5"
    >
      <v-slide-group-item
        v-for="recommend in recommendList"
        :key="recommend.id"
      >
        <div
          class="presentation_profile"
          @click="
            router.push({
              path: '/roommate/story',
              query: {
                id: recommend.id,
                name: recommend.name,
                contents: recommend.contents,
                grade: recommend.grade,
                major: recommend.major,
                sex: recommend.sex,
                personality: recommend.personality.join(','),
                hobbies: recommend.hobbies.join(','),
              },
            })
          "
        >
          <div class="presentation_profile_image">
            <div class="presentation_profile_image_border"></div>
            <div class="presentation_profile_image_canvas profile_love">
              <IconAvatar1
                v-if="parseInt(recommend.id % 3) == 0"
                :width="60"
                :height="60"
              />
              <IconAvatar2
                v-else-if="parseInt(recommend.id % 3) == 1"
                :width="60"
                :height="60"
              />
              <IconAvatar3 v-else :width="60" :height="60" />
            </div>
          </div>
          <p class="presentation_profile_name">{{ recommend.name }}</p>
        </div>
      </v-slide-group-item>
    </v-slide-group>
    <v-container
      v-else-if="!auth.userInfo.introductionWritten"
      style="justify-content: center; align-items: center; display: flex"
    >
      <v-btn color="#F2F4F6" @click="router.push('/my/introduce')">
        <p style="color: #595959">자기소개 작성하러 가기</p>
      </v-btn>
    </v-container>
    <v-container
      v-else-if="!auth.userInfo.surveyDone"
      style="justify-content: center; align-items: center; display: flex"
    >
      <v-btn color="#F2F4F6" @click="router.push('/my/survey')">
        <p style="color: #595959">설문조사 하러 가기</p>
      </v-btn>
    </v-container>
    <v-container style="background-color: #f2f4f6">
      <p v-if="room.roomList.length === 0">글이 없습니다.</p>
      <v-card
        v-else
        v-for="index in room.roomList"
        class="px-6 mb-2"
        rounded="15"
        v-bind:key="index.id"
      >
        <div class="d-flex">
          <p class="title-t18-bold pt-5" style="line-height: 15px">
            {{ index.title ?? "" }}
          </p>
          <v-spacer></v-spacer>
          <div class="main_image">
            <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
            <p class="main_image_text title-t11-regular">
              <span style="color: #2a5fc5">{{
                index.chatRoomResponseDto?.currentUsers ?? 0
              }}</span>
              <span>/</span>
              <span>{{ index.chatRoomResponseDto?.maxUser ?? "4" }}</span>
            </p>
          </div>
        </div>
        <div class="d-flex">
          <p class="title-t11-regular-grey" style="color: #585858">
            {{ index.nickname ?? "" }}
          </p>
          <v-spacer></v-spacer>
          <v-progress-linear
            :model-value="
              (index.chatRoomResponseDto?.currentUsers /
                index.chatRoomResponseDto?.maxUser) *
              100
            "
            bgColor="grey"
            :rounded="true"
            :roundedBar="true"
            height="7"
            style="width: 106px"
          />
        </div>
        <v-btn
          class="v-btn__gradient mt-6 mb-5"
          block
          :height="41"
          rounded="15"
          @click="router.push(`/roommate/detail?id=${index.post_id}`)"
        >
          자세히 보기
        </v-btn>
      </v-card>
    </v-container>
  </v-main>
  <v-btn
    variant="flat"
    color="white"
    rounded="30"
    height="39"
    to="/roommate/write"
    style="
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      border: 1.5px solid #2a5fc5;
    "
  >
    <template v-slot:prepend>
      <v-icon icon="mdi-pencil" color="#79A1E6" size="15"></v-icon>
    </template>
    <p class="title-t14-medium" style="color: #595959">글 쓰기</p>
  </v-btn>
</template>

<script setup>
const room = useRoomStore();
const auth = useAuthStore();

const router = useRouter();
const recommendList = ref([]);

const roommates = definePageMeta({
  title: "Roommate",
  description: "Roommate page",
  layout: "home",
});

onMounted(async () => {
  try {
    await auth.myPage();
    if (auth.userInfo.introductionWritten && auth.userInfo.surveyDone) {
      const response = await auth.getRecommend();
      if (response) {
        recommendList.value = response;
      }
    }
  } catch (error) {
    console.error("Failed to fetch user info or recommendations:", error);
  }
});
</script>

<style lang="scss" scoped>
.gnb-span {
  color: #939393;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 9px;
}
.title {
  color: #121212;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
}
.slider_item {
  margin-right: 1.2rem;
  width: 24.3rem;
  height: 15.7rem;
}
.presentation_profile {
  justify-content: center;
  align-items: center;
}
/* 프레젠테이션 프로필 이미지 div */
.presentation_profile_image {
  background-color: white;
  width: 72px;
  height: 88px;
  margin-right: 6px;
  margin-left: 6px;

  /* 아이템을 수평, 수직 가운데 정렬하는 코드 */
  display: flex;
  flex-direction: column;
  /* 방향을 row로 바꾸면 한 줄로 나온다! */
  justify-content: center;
  align-items: center;
}

/* 프레젠테이션 프로필 이미지 캔버스 */
.presentation_profile_image_canvas {
  background-color: grey;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
}

/* 프레젠테이션 프로필 ��름 div */
.presentation_profile_name {
  width: 84px;
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 191.304% */
}

/* 프로필 이미지 테두리 div */
.presentation_profile_image_border {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  /* 원 안에 그라디언트 속성을 넣으려면 먼저 투명을 해야함 */
  border: 2.5px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(225deg, #c913b9, #f9373f, #fecd00);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: absolute;
}

.profile_love {
  // background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ui-TCUvXK4uPaSf1f7j7aLBe9ca7ycRv2Q&usqp=CAU");
  background-size: cover;
  background-position: center;
}
.main_image {
  position: relative;
}
.main_image_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -80%);
}
</style>
