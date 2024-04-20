<template>
  <v-main>
    <div class="wrapper">
      <v-container>
        <v-img
          :width="97"
          :heigth="100"
          class="mx-auto"
          style="margin-bottom: 81px"
          alt="Dan GEEK"
          src="~/assets/img/logo_title.svg"
        />

        <v-form
          validate-on="submit lazy"
          @submit.prevent="submit"
          v-model="form"
        >
          <v-text-field
            hide-details="auto"
            v-model="userName"
            :rules="[rules.emailRequired]"
            style="margin-bottom: 21px"
            label="이메일을 입력해주세요"
          ></v-text-field>

          <v-text-field
            hide-details="auto"
            v-model="password"
            :rules="[rules.passwordRequired]"
            style="margin-bottom: 35px"
            label="패스워드를 입력해주세요"
            type="password"
          >
            <template v-slot:append-inner>
              <IconPasswordNm />
            </template>
          </v-text-field>
          <v-btn
            :loading="loading"
            text="로그인"
            type="submit"
            block
            :height="53"
          ></v-btn
        ></v-form>

        <p
          style="
            margin-top: 16px;
            text-align: center;
            color: #939393;
            font-family: Pretendard;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          "
        >
          <span @click="router.push('/')">비밀번호 찾기</span> |
          <span @click="router.push('/login/signup')">회원가입</span>
        </p>
      </v-container>
    </div>
  </v-main>
</template>

<script setup>
const router = useRouter();
const loading = ref(false);
const form = ref(false);
const userName = ref("");
const password = ref("");
const timeout = ref(null);

const rules = {
  emailRequired: (value) => !!value || "이메일을 입력해주세요",
  passwordRequired: (value) => !!value || "패스워드를 입력해주세요",
};

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
  router.push("/");
};

// watch(userName, (newValue) => {
//   checkApi(newValue);
// });
</script>

<style scoped>
.wrapper {
  background: white;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
