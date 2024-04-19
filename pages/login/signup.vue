<template>
  <v-main>
    <TopBar title="회원가입" :backPath="'/login'" />
    <v-container>
      <v-progress-linear
        model-value="33"
        bgColor="grey"
        :rounded="true"
        roundedBar="true"
        height="7"
        style="width: 33%"
      />
      <p class="title-t20-bold" style="margin-top: 20px">회원 정보 입력</p>
      <p class="title-t13-grey" style="margin-top: 6px; margin-bottom: 50px">
        인증받을 학교이메일을 입력해주세요
      </p>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
          hide-details="auto"
          variant="outlined"
          v-model="userName"
          rounded="10"
          :rules="rules"
          density="comfortable"
          style="margin-bottom: 21px"
          label="example@dankook.ac.kr"
          :single-line="true"
        ></v-text-field>

        <v-text-field
          hide-details="auto"
          variant="outlined"
          v-model="userName"
          rounded="10"
          density="comfortable"
          :rules="rules"
          style="margin-bottom: 35px"
          label="비밀번호"
          :single-line="true"
        ></v-text-field>
        <v-text-field
          hide-details="auto"
          variant="outlined"
          v-model="userName"
          rounded="10"
          density="comfortable"
          :rules="rules"
          style="margin-bottom: 35px"
          label="비밀번호 확인"
          :single-line="true"
        ></v-text-field>
        <v-text-field
          hide-details="auto"
          variant="outlined"
          v-model="userName"
          rounded="10"
          density="comfortable"
          :rules="rules"
          style="margin-bottom: 35px"
          label="닉네임"
          :single-line="true"
        ></v-text-field>
        <v-btn
          :loading="loading"
          text="학교 인증하기"
          type="submit"
          block
          :height="53"
        ></v-btn
      ></v-form>
    </v-container>
  </v-main>
</template>

<script setup>
const loading = ref(false);
const userName = ref("");
const timeout = ref(null);

const checkApi = (userName) => {
  return new Promise((resolve) => {
    clearTimeout(timeout.value);

    timeout.value = setTimeout(() => {
      if (!userName) return resolve("사용자 이름을 입력해주세요.");
      if (userName === "johnleider")
        return resolve(
          "사용자 이름이 이미 사용 중입니다. 다른 이름을 시도해주세요."
        );

      return resolve(true);
    }, 1000);
  });
};

const submit = async (event) => {
  loading.value = true;

  const results = await event;

  loading.value = false;

  // alert(JSON.stringify(results, null, 2));
  router.push("/login/validate");
};

watch(userName, (newValue) => {
  checkApi(newValue);
});
</script>

<style lang="scss" scoped></style>
