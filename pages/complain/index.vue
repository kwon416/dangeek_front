<template>
  <v-main class="container">
    <v-app-bar>
      <v-app-bar-title class="text-center mx-0 title-t16-bold">
        민원 신청하기
      </v-app-bar-title>
    </v-app-bar>
    <v-container>
      <div class="d-flex">
        <CustomTextInput
          label="방번호를 입력하세요"
          v-model="data.roomNumber"
        />
        <div style="width: 120px">
          <v-select
            v-model="data.dormitoryName"
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
      <CustomTextInput label="제목을 입력하세요" v-model="data.title" />
      <CustomTextArea label="내용을 입력하세요" v-model="data.contents" />
      <input type="file" @change="onFileChange" accept="image/*" />
      <div v-if="previewImage" class="preview-wrapper mt-3">
        <img :src="previewImage" alt="Preview" class="preview-image" />
      </div>
      <div style="height: 93px"></div>
    </v-container>
    <div class="pb-10 bottom-btn-wrapper">
      <v-btn
        height="53"
        class="v-btn__gradient mb-3 w-100"
        @click="submitComplain()"
      >
        제출하기
      </v-btn>
    </div>
  </v-main>
</template>

<script setup>
definePageMeta({
  title: "Complain",
  description: "Complain page",
  layout: "home",
});

const router = useRouter();
const complain = useComplainStore();
const previewImage = ref(null);
const file = ref(null);

const data = ref({
  title: "",
  contents: "",
  dormitoryName: "웅비홀",
  roomNumber: "",
});

function onFileChange(event) {
  file.value = event.target.files[0];

  if (file.value && file.value.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file.value);
  } else {
    previewImage.value = null;
    alert("이미지 파일만 업로드 가능합니다.");
  }
}

async function submitComplain() {
  // const formData = new FormData();

  // if (file.value) {
  //   formData.append("file", file.value);
  // }

  // formData.append(
  //   "text",
  //   new Blob([JSON.stringify(data.value)], { type: "application/json" })
  // );

  const res = await complain.createComplain(data.value);
  if (res) {
    alert("민원 신청이 완료되었습니다.");
    router.back();
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow-y: auto;
  height: calc(100vh - 66px);
}

.bottom-btn-wrapper {
  width: 100%;
  padding: 0 24px;
  background-color: white;
  position: fixed;
  bottom: 0;
}

.preview-wrapper {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 15px;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
