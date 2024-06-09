<template>
  <v-main style="background-color: #f2f4f6">
    <v-app-bar app :elevation="0" style="background-color: #f2f4f6">
      <v-btn icon @click="router.back()">
        <IconBackBtn />
      </v-btn>
      <v-app-bar-title class="text-center mx-0"> 알림 </v-app-bar-title>
      <v-btn icon disabled />
    </v-app-bar>
    <v-list bg-color="#f2f4f6">
      <v-list-item v-for="i in 8">
        <v-card rounded="15" class="py-2 my-1" @click="sheet = !sheet">
          <template v-slot:prepend>
            <IconAvatar1 />
          </template>
          <template v-slot:title>
            <p class="title-t14-medium">상대방 닉네임</p>
          </template>
          <template v-slot:subtitle>
            <p class="title-t13-grey" style="color: #939393">
              000 게시물에 채팅을 신청하셨어요
            </p>
          </template>
          <template v-slot:append>
            <p
              class="title-t11-regular"
              style="color: #3867e7; margin-bottom: 20px"
            >
              10분전
            </p>
          </template>
        </v-card>
      </v-list-item>
    </v-list>
  </v-main>
  <v-bottom-sheet v-model="sheet" max-height="80%">
    <v-card class="pt-3" style="border-radius: 15px 15px 0 0">
      <v-card-text>
        <div class="d-flex" style="align-items: center">
          <IconAvatar1 />
          <p class="title-t27-bold p-2" style="color: #2a5fc5">닉네임</p>
        </div>
        <div class="mt-5" style="text-align: start">
          <p class="pb-2 title-t14-bold">이름: {{ null }}</p>
          <p class="pb-2 title-t14-bold">학과: {{ null }}</p>
          <p class="pb-2 title-t14-bold">학년: {{ null }}</p>
          <p class="pb-2 title-t14-bold">성별: {{ null }}</p>
        </div>
        <p class="title-t18-bold pt-10 pb-4" style="color: #2a5fc5">
          생활 습관 및 성향
        </p>
        <div style="gap: 14px 17px; display: flex; flex-wrap: wrap">
          <CustomChip text="몰13213123루" />
          <CustomChip text="몰13213123루" />
          <CustomChip text="몰13213123루" />
          <CustomChip text="몰13213123루" />
          <CustomChip text="몰13213123루" />

          <CustomChip text="몰루" />
          <CustomChip text="몰루" />
          <CustomChip text="몰루" />
        </div>
        <p class="title-t18-bold pt-10 pb-4" style="color: #2a5fc5">
          취미 및 관심사
        </p>
        <div style="gap: 14px 17px; display: flex; flex-wrap: wrap">
          <CustomChip text="몰13213123루" />
          <CustomChip text="몰루" />
          <CustomChip text="몰루" />
          <CustomChip text="몰루" />
        </div>
        <div style="height: 93px"></div>
      </v-card-text>
      <div class="pb-10 bottom-btn-wrapper" style="gap: 10px">
        <v-btn
          color="#CED3DC"
          width="50%"
          rounded="15"
          height="53"
          @click="sheet = !sheet"
        >
          <p class="title-t18-bold">거절</p>
        </v-btn>
        <v-btn
          class="v-btn__gradient"
          width="50%"
          rounded="15"
          height="53"
          @click="sheet = !sheet"
        >
          <p class="title-t18-bold">수락</p>
        </v-btn>
      </div>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup>
const router = useRouter();
const sheet = ref(false);
</script>

<style lang="scss" scoped>
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
