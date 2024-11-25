<template>
  <v-main>
    <TopBar title="공동구매 및 할인"></TopBar>
    <v-container>
      <div class="ms-auto" style="width: 143px">
        <v-select
          class="ms-3"
          rounded="23"
          density="compact"
          color="#79A1E6"
          :items="['배달음식', '냉동식품', '냉장식품', '기타식품']"
        >
          <template v-slot:label>
            <p
              style="
                color: #79a1e6;
                font-family: Pretendard;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
              "
            >
              카테고리
            </p>
          </template>
        </v-select>
      </div>
      <div class="d-flex">
        <p style="padding-top: 10px; width: 80px">제목</p>
        <CustomTextInput label="" v-model="data.title" />
      </div>
      <div class="d-flex">
        <p style="padding-top: 10px; width: 80px">링크</p>
        <CustomTextInput label="" v-model="data.link" />
      </div>
      <div class="d-flex">
        <p style="padding-top: 10px; width: 80px">쇼핑몰</p>
        <CustomTextInput label="" v-model="data.mallName" />
      </div>
      <div class="d-flex">
        <p style="padding-top: 10px; width: 80px">상품명</p>
        <CustomTextInput label="" v-model="data.item" />
      </div>
      <div class="d-flex">
        <p style="padding-top: 10px; width: 80px">가격</p>
        <CustomTextInput label="" v-model="data.price" />
      </div>
      <div class="d-flex">
        <p style="padding-top: 10px; width: 80px">배송비</p>
        <CustomTextInput label="" />
      </div>
      <CustomTextArea label="내용을 입력하세요" v-model="data.contents" />
      <div>
        <input type="file" @change="onFileChange" accept="image/*" />
        <img
          v-if="previewImage"
          :src="previewImage"
          alt="미리보기"
          style="max-width: 300px; margin-top: 10px"
        />
      </div>
      <div style="height: 93px"></div>
    </v-container>
    <div class="pb-10 bottom-btn-wrapper">
      <v-btn
        block
        class="v-btn__gradient"
        rounded="15"
        height="53"
        @click="onSummit()"
      >
        <p class="title-t18-bold" style="color: #fff">제출하기</p>
      </v-btn>
    </div>
  </v-main>
</template>

<script setup>
const router = useRouter();
const group = useGroupStore();
const data = ref({
  title: "",
  contents: "",
  // maxUsers: 2,
  link: "",
  mallName: "",
  item: "",
  price: "",
});
const file = ref(null);
const formData = new FormData();
const previewImage = ref(null);

async function onSummit() {
  if (file.value) {
    formData.append("file", file.value);
  }
  data.value.price += "원";
  formData.append(
    "text",
    new Blob([JSON.stringify(data.value)], { type: "application/json" })
  );

  const res = await group.createGroup(formData);
  if (res) {
    router.back();
  }
}
function onFileChange(e) {
  file.value = e.target.files[0];

  // 이미지 미리보기 생성
  if (file.value) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file.value);
  } else {
    previewImage.value = null;
  }
}
</script>

<style lang="scss" scoped>
p {
  color: #939393;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
