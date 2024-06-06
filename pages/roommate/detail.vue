<template>
  <v-main>
    <TopBar title="모집글 자세히 보기" />
    <v-container>
      <v-card elevation="3" rounded="20" class="mb-6">
        <template v-slot:prepend>
          <IconAvatar1 />
        </template>
        <template v-slot:title>
          <p class="title-t20-bold ps-2" style="color: #3867e7">nickname</p>
        </template>
      </v-card>
      <div class="d-flex">
        <p class="title-t18-bold pt-5" style="line-height: 15px">
          4인 여자 룸메 구해요!
        </p>
        <v-spacer></v-spacer>
        <div class="main_image">
          <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
          <p class="main_image_text title-t11-regular">
            <span style="color: #2a5fc5">2</span>
            <span>/</span>
            <span>4</span>
          </p>
        </div>
      </div>
      <div class="d-flex">
        <p class="title-t11-regular-grey" style="color: #585858">
          11명이 이 글을 보고있어요
        </p>
        <v-spacer></v-spacer>
        <v-progress-linear
          :model-value="50"
          bgColor="grey"
          :rounded="true"
          :roundedBar="true"
          height="7"
          style="width: 106px"
        />
      </div>
    </v-container>
    <v-divider thickness="7" color="#F2F4F6" />
    <v-container></v-container>
  </v-main>
</template>

<script setup></script>

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
</style>
