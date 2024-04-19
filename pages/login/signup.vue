<template>
  <v-main>
    <TopBar title="회원가입" :backPath="'/login'" />
    <v-container>
      <v-progress-linear
        :model-value="indicatorValue"
        bgColor="grey"
        :rounded="true"
        roundedBar="true"
        height="7"
        style="width: 33%"
      />
      <v-window v-model="windowNumber">
        <!-- step 1 사용자 정보 입력-->
        <v-window-item>
          <p class="title-t20-bold" style="margin-top: 20px">회원 정보 입력</p>
          <p
            class="title-t13-grey"
            style="margin-top: 6px; margin-bottom: 49px"
          >
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
              style="margin-bottom: 34px"
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
              style="margin-bottom: 34px"
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
              style="margin-bottom: 34px"
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
              label="닉네임"
              :single-line="true"
            ></v-text-field>
            <v-btn
              :loading="loading"
              text="학교 인증하기"
              type="submit"
              block
              :height="53"
              style="margin-top: 64px"
            ></v-btn
          ></v-form>
        </v-window-item>

        <!-- step 2 이메일 인증하기 -->
        <v-window-item>
          <p class="title-t20-bold" style="margin-top: 20px">이메일 인증하기</p>
          <p
            class="title-t13-grey"
            style="margin-top: 6px; margin-bottom: 49px"
          >
            입력하신 이메일로 인증번호가 발송되었어요
          </p>
          <v-form validate-on="submitValidate lazy" @submit.prevent="submit">
            <div class="flex" style="margin-bottom: 310px">
              <v-text-field
                hide-details="auto"
                variant="outlined"
                v-model="userName"
                rounded="10"
                :rules="rules"
                density="comfortable"
                label="인증번호 입력"
                :single-line="true"
              ></v-text-field>
              <v-btn
                variant="outlined"
                height="48"
                color="#79A1E6"
                rounded="10"
                class="ms-2"
                ><span class="title-t16-medium" style="color: #79a1e6"
                  >재발송</span
                ></v-btn
              >
            </div>

            <v-btn
              :loading="loading"
              text="학교 인증하기"
              @click.once="submitValidate(event)"
              block
              :height="53"
            ></v-btn
          ></v-form>
        </v-window-item>

        <!-- step 3 약관 동의 -->
        <v-window-item>
          <p class="title-t20-bold" style="margin-top: 20px">
            약관동의 확인하기
          </p>
          <p
            class="title-t13-grey"
            style="margin-top: 6px; margin-bottom: 49px"
          >
            원활한 서비스 이용을 위해 아래 내용을 검토 후 동의 해주세요
          </p>
          <v-form validate-on="submit lazy" @submit.prevent="submit">
            <div class="flex" style="margin-bottom: 310px">
              <v-text-field
                hide-details="auto"
                variant="outlined"
                v-model="userName"
                rounded="10"
                :rules="rules"
                density="comfortable"
                label="인증번호 입력"
                :single-line="true"
              ></v-text-field>
              <v-btn
                variant="outlined"
                height="48"
                color="#79A1E6"
                rounded="10"
                class="ms-2"
                ><span class="title-t16-medium" style="color: #79a1e6"
                  >재발송</span
                ></v-btn
              >
            </div>

            <v-btn
              :loading="loading"
              text="완료"
              type="submit"
              block
              :height="53"
            ></v-btn
          ></v-form>
        </v-window-item>
      </v-window>
    </v-container>
  </v-main>
</template>

<script setup>
const router = useRouter();
const loading = ref(false);
const userName = ref("");
const timeout = ref(null);

const windowNumber = ref(0);

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
  windowNumber.value = 1;
};

const submitValidate = async (event) => {
  loading.value = true;

  const results = await event;

  loading.value = false;

  windowNumber.value = 2;
};

const indicatorValue = computed(() => {
  let persent;
  switch (windowNumber.value) {
    case 0:
      persent = 33;
      break;
    case 1:
      persent = 66;
      break;
    case 2:
      persent = 100;
      break;
    default:
      persent = 33;
  }
  return persent;
});

watch(userName, (newValue) => {
  checkApi(newValue);
});
</script>

<style lang="scss" scoped></style>
