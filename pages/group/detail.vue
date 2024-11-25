<template>
  <v-main>
    <TopBar title="공동구매 및 할인" />
    <img
      :src="
        group.groupDetail.imageUrl ||
        'https://via.placeholder.com/200?text=NO_IMAGE'
      "
      :alt="group.groupDetail.title || '상품 이미지'"
      @error="handleImageError"
    />
    <v-container>
      <div class="d-flex">
        <IconAvatar1 />
        <p class="title-t20-regular ps-4" style="color: #3867e7">
          {{ group.groupDetail?.nickname }}
        </p>
        <v-spacer></v-spacer>
        <p class="tilte-t24-bold" style="color: #505050">
          {{ group.groupDetail.price }}
        </p>
      </div>
      <div class="divider"></div>
      <div style="display: block; width: fit-content">
        <div class="d-flex" style="justify-content: start">
          <p
            class="title-t11-regular"
            style="line-height: 15px; padding-bottom: 6px"
          >
            <span class="me-9">상품명</span>
            <span>{{ group.groupDetail.title }}</span>
          </p>
        </div>
        <div class="d-flex pt-1" style="justify-content: start">
          <p
            class="title-t11-regular"
            style="line-height: 15px; padding-bottom: 6px"
          >
            <span class="me-9">쇼핑몰</span>
            <span>{{ group.groupDetail.mallName }}</span>
          </p>
        </div>
        <div class="d-flex pt-1" style="justify-content: start">
          <p
            class="title-t11-regular"
            style="line-height: 15px; padding-bottom: 6px"
          >
            <span class="me-9">배송비</span>
            <span>무료</span>
          </p>
        </div>
        <div class="d-flex pt-1" style="justify-content: start">
          <p
            class="title-t11-regular"
            style="line-height: 15px; padding-bottom: 6px"
          >
            <span class="me-12">링크</span>
            <span>{{ group.groupDetail.link }}</span>
          </p>
        </div>
      </div>
      <div class="divider"></div>
      <p>
        {{ group.groupDetail.contents }}
      </p>
      <div style="height: 133px"></div>
    </v-container>
  </v-main>
  <div class="pb-10 pt-10 bottom-btn-wrapper">
    <v-btn
      block
      class="v-btn__gradient"
      rounded="15"
      height="53"
      @click="router.back()"
    >
      <p class="title-t18-bold">채팅 신청하기</p>
    </v-btn>
  </div>
</template>

<script setup>
const router = useRouter();
const group = useGroupStore();
const route = useRoute();
const { id } = route.query;

onMounted(async () => {
  await group.getGroupDetail(id);
});

function handleImageError(e) {
  // 이미지 로드 실패시 placeholder 이미지로 대체
  e.target.src = "/images/placeholder.png";
}
</script>

<style lang="scss" scoped>
img {
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vw;
  max-height: 100vw;
}
.divider {
  // position: absolute;
  overflow-x: visible;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: -24px;
  left: 0px;
  width: 100vw;
  height: 7px;
  background-color: #f2f4f6;
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
