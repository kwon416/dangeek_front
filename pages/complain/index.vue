<template>
  <v-main>
    <v-app-bar>
      <v-app-bar-title class="text-center mx-0 title-t16-bold">
        민원 신청하기
      </v-app-bar-title>
    </v-app-bar>
    <v-container>
      <div class="d-flex">
        <CustomTextInput label="방번호를 입력하세요" />
        <div style="width: 120px">
          <v-select
            class="ms-3"
            rounded="23"
            density="compact"
            color="#79A1E6"
            :items="['웅비홀', '집현재', '진리관']"
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
                기숙사
              </p>
            </template>
          </v-select>
        </div>
      </div>
      <CustomTextInput label="제목을 입력하세요" />
      <CustomTextArea label="내용을 입력하세요" />
      <input type="file" @change="onFileChange" accept="image/*" />
      <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
    </v-container>
  </v-main>
</template>

<script setup>
definePageMeta({
  title: "Complain",
  description: "Complain page",
  layout: "home",
});

const imageUrl = ref(null);

function onFileChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    this.imageUrl = URL.createObjectURL(file);
  } else {
    this.imageUrl = null;
    alert("Please upload a valid image file.");
  }
}
</script>

<style lang="scss" scoped></style>
