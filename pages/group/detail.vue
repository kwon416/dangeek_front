<template>
  <v-main>
    <TopBar title="공동구매 및 할인" />
    <img src="https://picsum.photos/200/200" alt="" />
    <v-container>
      <div class="d-flex">
        <IconAvatar1 />
        <p class="title-t20-regular ps-4" style="color: #3867e7">nickname</p>
        <v-spacer></v-spacer>
        <p class="tilte-t24-bold" style="color: #505050">21,319원</p>
      </div>
      <div class="divider"></div>
      <div style="display: block; width: fit-content">
        <div class="d-flex" style="justify-content: start">
          <p
            class="title-t11-regular"
            style="line-height: 15px; padding-bottom: 6px"
          >
            <span class="me-9">상품명</span>
            <span>동원 개성 왕만두 2.24kg/김치만두 2봉</span>
          </p>
        </div>
        <div class="d-flex pt-1" style="justify-content: start">
          <p
            class="title-t11-regular"
            style="line-height: 15px; padding-bottom: 6px"
          >
            <span class="me-9">쇼핑몰</span>
            <span>알리익스프레스</span>
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
            <span>https://a.aliexpress.com/</span>
          </p>
        </div>
      </div>
      <div class="divider"></div>
      <p>
        양이 너무 많은거 같아서 같이 나눠먹을 사람 구합니다~ 기숙사에서
        전자레인지로 돌리기만 해도 맛있게 먹을 수 있어요.
      </p>
      <div style="height: 133px"></div>
    </v-container>
  </v-main>
  <div class="pb-10 pt-10 bottom-btn-wrapper">
    <v-btn
      v-bind="activatorProps"
      block
      class="v-btn__gradient"
      rounded="15"
      height="53"
      @click="router.back()"
    >
      <p class="title-t18-bold">저장하기</p>
    </v-btn>
  </div>
</template>

<script setup></script>

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
