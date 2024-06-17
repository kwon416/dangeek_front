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
      <p class="title-t18-bold pt-5 pb-4" style="color: #2a5fc5">
        작성자의 생활 습관 및 성향
      </p>
      <div style="gap: 14px 17px; display: flex; flex-wrap: wrap">
        <CustomChip text="일찍 자고 일어나는 성향" />
        <CustomChip text="취침 밤 11시" />
        <CustomChip text="기상 아침 7시" />
        <CustomChip text="조용한 환경 선호" />
        <CustomChip text="늦은 시간 시끄러운 활동 불호" />
      </div>
      <p class="title-t18-bold pt-10 pb-4" style="color: #2a5fc5">
        작성자의 취미 및 관심사
      </p>
      <div style="gap: 14px 17px; display: flex; flex-wrap: wrap">
        <CustomChip text="책읽기" />
        <CustomChip text="음악감상" />
        <CustomChip text="주말운동" />
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
