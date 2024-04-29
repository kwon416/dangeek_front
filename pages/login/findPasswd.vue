<template>
  <v-main>
    <v-app-bar app :elevation="0">
      <v-btn icon @click="pressBack()">
        <IconBackBtn />
      </v-btn>
      <v-app-bar-title class="text-center mx-0">
        비밀번호 찾기
      </v-app-bar-title>

      <v-btn icon disabled />
    </v-app-bar>

    <v-container>
      <v-window v-model="windowNumber">
        <!-- step 1 이메일 인증 -->
        <v-window-item>
          <p class="title-t20-bold" style="margin-top: 20px">
            비밀번호 찾을 이메일 입력
          </p>
          <p
            class="title-t13-grey"
            style="margin-top: 6px; margin-bottom: 49px"
          >
            입력한 이메일로 인증번호가 발송되었어요
          </p>
          <v-form @submit.prevent="submit">
            <v-text-field
              hide-details="auto"
              v-model="email"
              :rules="[rules.emailRequired, rules.email]"
              style="margin-bottom: 34px"
              label="example@dankook.ac.kr"
            ></v-text-field>
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

        <!-- step 2 비밀번호 재설정 -->
        <v-window-item>
          <p class="title-t20-bold" style="margin-top: 20px">
            새로운 비밀번호 입력
          </p>
          <p
            class="title-t13-grey"
            style="margin-top: 6px; margin-bottom: 49px"
          >
            개인정보를 위해 비밀번호를 변경해주세요
          </p>
          <v-form @submit.prevent="submit" v-model="valid">
            <v-text-field
              hide-details="auto"
              v-model="password"
              :rules="[rules.passwordRequired]"
              style="margin-bottom: 34px"
              type="password"
              label="새로운 비밀번호"
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
              label="새로운 비밀번호 확인"
            ></v-text-field>

            <v-btn
              class="v-btn__gradient"
              :loading="loading"
              text="변경하기"
              @click="completeClick()"
              :disabled="
                password.length > 0 && password === passwordConfirm
                  ? false
                  : true
              "
              block
              :height="53"
              style="margin-top: 64px"
            ></v-btn
          ></v-form>

          <!-- 비밀번호 변경 완료 다이얼로그 -->
          <v-dialog v-model="isCompleteDialogOpend" :persistent="true">
            <v-card
              class="pa-4"
              style="border-radius: 15px; align-items: center"
            >
              <p class="title-t17-bold" style="margin-bottom: 26px">
                비밀번호가 변경되었습니다
              </p>
              <v-btn
                @click="router.push('/login')"
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
const valid = ref(false);
const loading = ref(false);
const windowNumber = ref(0);
const email = ref("");
const certNumber = ref("");
const isResendDialogOpend = ref(false);

const password = ref("");
const passwordConfirm = ref("");
const isCompleteDialogOpend = ref(false);

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

const submit = async (event) => {
  // if (!valid.value) return;

  loading.value = true;

  const results = await event;

  loading.value = false;

  // alert(JSON.stringify(results, null, 2));
};

const submitValidate = async (event) => {
  loading.value = true;

  const results = await event;

  loading.value = false;

  windowNumber.value = 1;
};

function pressBack() {
  if (windowNumber.value > 0) {
    windowNumber.value--;
  } else {
    router.back();
  }
}

function completeClick() {
  isCompleteDialogOpend.value = true;
  // router.push("/");
}

function resendEmail() {
  isResendDialogOpend.value = true;

  setTimeout(() => {
    isResendDialogOpend.value = false;
  }, 3000);
}
</script>

<style lang="scss" scoped></style>
