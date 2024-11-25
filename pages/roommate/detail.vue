<template>
  <v-main>
    <TopBar title="모집글 자세히 보기" />
    <v-container>
      <v-card elevation="3" rounded="20" class="mb-6">
        <template v-slot:prepend>
          <IconAvatar1 />
        </template>
        <template v-slot:title>
          <p class="title-t20-bold ps-2" style="color: #3867e7">
            {{ room.roomDetail.nickname }}
          </p>
        </template>
      </v-card>
      <div class="d-flex">
        <p class="title-t18-bold pt-5" style="line-height: 15px">
          {{ room.roomDetail.title }}
        </p>
        <v-spacer></v-spacer>
        <div class="main_image">
          <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
          <p class="main_image_text title-t11-regular">
            <span style="color: #2a5fc5">{{
              room.roomDetail.chatRoomResponse.currentUsers
            }}</span>
            <span>/</span>
            <span>{{ room.roomDetail.chatRoomResponse.maxUser }}</span>
          </p>
        </div>
      </div>
      <div class="d-flex">
        <p class="title-t11-regular-grey" style="color: #585858">조회수</p>
        <v-spacer></v-spacer>
        <v-progress-linear
          :modelValue="
            (room.roomDetail.chatRoomResponse.currentUsers /
              room.roomDetail.chatRoomResponse.maxUser) *
            100
          "
          bgColor="grey"
          :rounded="true"
          :roundedBar="true"
          height="7"
          style="width: 106px"
        />
      </div>
    </v-container>
    <v-divider thickness="7" color="#F2F4F6" />
    <v-container>
      <p
        class="title-t14-regular pb-6"
        style="color: #616161; white-space: pre-line"
      >
        {{ room.roomDetail.contents }}
      </p>
      <p class="title-t18-bold pt-5 pb-4" style="color: #2a5fc5">작성자 소개</p>
      <p
        class="title-t14-regular pb-6"
        style="color: #616161; white-space: pre-line"
      >
        {{ room.roomDetail.memberIntroduction.contents }}
      </p>

      <p class="title-t18-bold pb-4" style="color: #2a5fc5">
        작성자의 생활 습관 및 성향
      </p>
      <div style="gap: 14px 17px; display: flex; flex-wrap: wrap">
        <CustomChip
          v-for="(personality, index) in room.roomDetail.memberIntroduction
            .personality"
          :key="index"
          :text="personality"
        />
      </div>
      <p class="title-t18-bold pt-10 pb-4" style="color: #2a5fc5">
        작성자의 취미 및 관심사
      </p>
      <div style="gap: 14px 17px; display: flex; flex-wrap: wrap">
        <CustomChip
          v-for="(hobby, index) in room.roomDetail.memberIntroduction.hobbies"
          :key="index"
          :text="getHobbyLabel(hobby)"
        />
      </div>
      <div style="height: 93px"></div>
    </v-container>
    <div class="pb-10 bottom-btn-wrapper">
      <v-btn block class="v-btn__gradient" rounded="15" height="53">
        <p class="title-t18-bold">채팅 신청하기</p>
      </v-btn>
    </div>
  </v-main>
</template>

<script setup>
const route = useRoute();
const { id } = route.query;
const room = useRoomStore();

const hobbyLabels = {
  game: "게임",
  sports: "스포츠",
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

function getHobbyLabel(hobby) {
  return hobbyLabels[hobby] || hobby;
}

onBeforeMount(async () => {
  console.log(id);
  await room.getDetail(id);
});
</script>

<style lang="scss" scoped>
.main_image {
  position: relative;
}
.main_image_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -80%);
}
.bottom-btn-wrapper {
  width: 100%;
  padding: 0 24px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
</style>
