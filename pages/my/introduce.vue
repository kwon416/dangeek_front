<template>
  <v-main>
    <TopBar title="개인정보 수정" />
    <v-container>
      <CustomTextInput label="이름" v-model="data.name" />
      <CustomTextInput label="학과" v-model="data.major" />
      <CustomTextInput label="학년" v-model="data.grade" />
      <CustomTextInput label="성별" v-model="data.sex" />
      <v-spacer />
      <v-btn
        class="v-btn__gradient mt-6 mb-5"
        block
        :height="41"
        rounded="15"
        @click="saveIntroduce()"
      >
        저장하기
      </v-btn>
    </v-container>
  </v-main>
</template>

<script setup>
const router = useRouter();
const auth = useAuthStore();
const data = ref({
  name: "",
  major: "",
  grade: "",
  sex: "",
});

async function saveIntroduce() {
  console.log(data.value);
  await auth.saveIntroduce(data.value);
  router.back();
}
</script>

<style lang="scss" scoped></style>
