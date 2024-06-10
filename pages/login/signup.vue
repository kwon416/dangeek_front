<template>
  <v-main>
    <v-app-bar app :elevation="0">
      <v-btn icon @click="pressBack()">
        <IconBackBtn />
      </v-btn>
      <v-app-bar-title class="text-center mx-0"> 회원 가입 </v-app-bar-title>

      <v-btn icon disabled />
    </v-app-bar>
    <v-container>
      <v-progress-linear
        :model-value="windowNumber * 33 + 33"
        bgColor="grey"
        :rounded="true"
        :roundedBar="true"
        height="7"
        style="width: 104px"
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
          <v-form @submit.prevent="submit" v-model="valid">
            <v-text-field
              hide-details="auto"
              v-model="username"
              :rules="[rules.emailRequired, rules.email]"
              style="margin-bottom: 34px"
              label="example@dankook.ac.kr"
            ></v-text-field>

            <v-text-field
              hide-details="auto"
              v-model="password"
              :rules="[rules.passwordRequired]"
              style="margin-bottom: 34px"
              type="password"
              label="비밀번호"
            >
              <template v-slot:append-inner>
                <IconPasswordNm />
              </template>
            </v-text-field>
            <v-text-field
              hide-details="auto"
              v-model="passwordConfirm"
              :rules="[rules.passwordSame]"
              style="margin-bottom: 34px"
              type="password"
              label="비밀번호 확인"
            >
              <template v-slot:append-inner> <IconPasswordNm /> </template
            ></v-text-field>
            <v-text-field
              hide-details="auto"
              v-model="nickname"
              :rules="[rules.nicknameRequired]"
              label="닉네임"
            ></v-text-field>
            <v-btn
              class="v-btn__gradient"
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
                v-model="certNumber"
                :rules="[rules.certNumber]"
                density="comfortable"
                maxlength="6"
                label="인증번호 입력"
              ></v-text-field>
              <v-btn
                variant="outlined"
                height="48"
                color="#79A1E6"
                rounded="10"
                class="ms-2"
                @click="resendEmail()"
                ><span class="title-t16-medium" style="color: #79a1e6"
                  >재발송</span
                ></v-btn
              >
            </div>

            <v-btn
              class="v-btn__gradient"
              :loading="loading"
              :disabled="certNumber.length == 6 ? false : true"
              text="인증완료"
              @click="submitValidate(event)"
              block
              :height="53"
            ></v-btn
          ></v-form>

          <!-- 이메일 재발송 얼럿 -->
          <v-dialog v-model="isResendDialogOpend">
            <v-card
              class="pa-4"
              style="border-radius: 15px; align-items: center"
            >
              <IconCheck
                :width="33"
                :height="33"
                style="margin-top: 8px; margin-bottom: 18px"
              />
              <p class="title-t17-bold" style="margin-bottom: 3px">
                인증번호가 재발송되었습니다
              </p>
            </v-card>
          </v-dialog>
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
          <!-- 전체 동의 박스 -->
          <div
            class="d-flex align-item-center"
            style="border-radius: 10px; border: 1.5px solid #e8e8e8"
          >
            <v-checkbox v-model="allSelected" style="margin-bottom: -24px">
              <template v-slot:append>
                <p class="title-t16-medium" style="margin-left: -10px">
                  전체 동의
                </p>
              </template>
            </v-checkbox>
          </div>
          <!-- 하위 항목 -->
          <div class="d-flex align-item-center" style="height: 43px">
            <v-checkbox
              v-model="selected"
              value="check1"
              style="margin-bottom: -24px"
            >
              <template v-slot:append>
                <div class="d-flex">
                  <div class="d-flex justify-content-between">
                    <v-chip
                      size="x-small"
                      variant="outlined"
                      color="#79A1E6"
                      class="chip-position"
                      >필수</v-chip
                    >
                    <p class="title-t14-medium" style="line-height: 20px">
                      서비스 이용약관
                    </p>
                  </div>
                </div>
              </template>
            </v-checkbox>
            <IconForward class="icon-position" />
          </div>
          <div class="d-flex align-item-center" style="height: 43px">
            <v-checkbox
              v-model="selected"
              value="check2"
              style="margin-bottom: -24px"
            >
              <template v-slot:append>
                <div class="d-flex">
                  <div class="d-flex justify-content-between">
                    <v-chip
                      size="x-small"
                      variant="outlined"
                      color="#79A1E6"
                      class="chip-position"
                      >필수</v-chip
                    >
                    <p class="title-t14-medium" style="line-height: 20px">
                      개인정보수집/이용동의
                    </p>
                  </div>
                </div>
              </template>
            </v-checkbox>
            <IconForward class="icon-position" />
          </div>
          <div class="d-flex align-item-center" style="height: 43px">
            <v-checkbox
              v-model="selected"
              value="check3"
              style="margin-bottom: -24px"
            >
              <template v-slot:append>
                <div class="d-flex">
                  <div class="d-flex justify-content-between">
                    <v-chip
                      size="x-small"
                      variant="outlined"
                      color="#79A1E6"
                      class="chip-position"
                      >필수</v-chip
                    >
                    <p class="title-t14-medium" style="line-height: 20px">
                      위치기반 서비스 이용약관 동의
                    </p>
                  </div>
                </div>
              </template>
            </v-checkbox>
            <IconForward class="icon-position" />
          </div>
          <div class="d-flex align-item-center" style="height: 43px">
            <v-checkbox
              v-model="selected"
              value="check4"
              style="margin-bottom: -24px"
            >
              <template v-slot:append>
                <div class="d-flex">
                  <div class="d-flex justify-content-between">
                    <v-chip
                      size="x-small"
                      variant="outlined"
                      color="#79A1E6"
                      class="chip-position"
                      >필수</v-chip
                    >
                    <p class="title-t14-medium" style="line-height: 20px">
                      개인정보 제3자 정보제공 동의
                    </p>
                  </div>
                </div>
              </template>
            </v-checkbox>
            <IconForward class="icon-position" />
          </div>

          <v-btn
            class="v-btn__gradient"
            :loading="loading"
            text="완료"
            :disabled="selected.length !== 4"
            @click="completeClick()"
            block
            :height="53"
            style="margin-top: 130px"
          ></v-btn>

          <!-- 회원가입 완료 다이얼로그 -->
          <v-dialog v-model="isCompleteDialogOpend" :persistent="true">
            <v-card
              class="pa-4"
              style="border-radius: 15px; align-items: center"
            >
              <IconCheck
                :width="33"
                :height="33"
                style="margin-top: 8px; margin-bottom: 18px"
              />
              <p class="title-t17-bold" style="margin-bottom: 3px">
                회원가입 완료
              </p>
              <p class="title-t14-grey" style="margin-bottom: 23px">
                지금 바로 DanGeek을 이용해보세요
              </p>
              <v-btn
                @click="clickComplete()"
                rounded="15"
                class="w-100 v-btn__gradient"
                style="height: 41px"
              >
                <span class="title-t16-medium">확인</span>
              </v-btn>
            </v-card>
          </v-dialog>
        </v-window-item>
      </v-window>
    </v-container>
  </v-main>
</template>

<script setup>
const router = useRouter();
const auth = useAuthStore();
const loading = ref(false);
const valid = ref(false);
const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const nickname = ref("");
const certNumber = ref("");
const timeout = ref(null);
const isResendDialogOpend = ref(false);
const isCompleteDialogOpend = ref(false);
const checkList = ["check1", "check2", "check3", "check4"];
const selected = ref([]);

const allSelected = computed({
  get() {
    return checkList.length === selected.value.length;
  },
  set(newValue) {
    newValue ? (selected.value = checkList) : (selected.value = []);
  },
});

const rules = {
  emailRequired: (value) => !!value || "이메일을 입력해주세요",
  passwordRequired: (value) => !!value || "비밀번호를 입력해주세요",
  passwordSame: (value) =>
    value == password.value || "비밀번호가 같지 않습니다",
  nicknameRequired: (value) => !!value || "닉네임을 입력해주세요",
  certNumber: (value) => !!value || "인증번호를 입력해주세요",
  counter: (value) => value.length <= 20 || "Max 20 characters",
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "유효하지 않은 이메일입니다.";
  },
};

const windowNumber = ref(0);

const checkApi = (username) => {
  return new Promise((resolve) => {
    clearTimeout(timeout.value);

    timeout.value = setTimeout(() => {
      if (!username) return resolve("사용자 이름을 입력해주세요.");
      if (username === "johnleider")
        return resolve(
          "사용자 이름이 이미 사용 중입니다. 다른 이름을 시도해주세요."
        );

      return resolve(true);
    }, 1000);
  });
};

const submit = async (event) => {
  if (!valid.value) return;

  loading.value = true;

  const results = await event;

  loading.value = false;

  // alert(JSON.stringify(results, null, 2));
  windowNumber.value = 1;
};

// 학교 인증하기
const submitValidate = async (event) => {
  loading.value = true;

  const results = await event;

  loading.value = false;

  windowNumber.value = 2;
};

// watch(userName, (newValue) => {
//   checkApi(newValue);
// });

function pressBack() {
  if (windowNumber.value > 0) {
    windowNumber.value--;
  } else {
    router.back();
  }
}

// 마지막 완료 버튼 클릭
async function completeClick() {
  const response = await auth.signup(
    username.value,
    password.value,
    nickname.value
  );
  if (response) {
    isCompleteDialogOpend.value = true;
  } else {
    alert("회원가입에 실패했습니다.");
  }
}

function resendEmail() {
  isResendDialogOpend.value = true;

  setTimeout(() => {
    isResendDialogOpend.value = false;
  }, 3000);
}

// 회원가입 완료 메인으로 이동
async function clickComplete() {
  isCompleteDialogOpend.value = false;
  router.push("/");
}
</script>

<style lang="scss" scoped>
.icon-position {
  position: absolute;
  right: 10px;
  margin-top: 20px;
}
.chip-position {
  margin-left: -10px;
  margin-right: 16px;
}
</style>
