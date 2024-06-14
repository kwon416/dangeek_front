<template>
  <v-main>
    <TopBar title="마이페이지" />
    <v-container>
      <IconAvatar1 :width="88" :height="88" style="margin: 0 auto" />
      <div class="center">
        <div style="width: 15px"></div>
        <span class="title-t20-bold mx-2">{{ auth.userInfo.nickname }}</span>
        <v-icon icon="mdi-pencil" color="#939393" size="15"></v-icon>
      </div>
      <div class="center">
        <p class="title-t16-medium" style="color: #939393">
          {{ auth.userInfo.username }}
        </p>
      </div>
      <div class="center">
        <v-btn
          color="#F2F4F6"
          style="margin: 20px auto"
          @click="router.push('/my/introduce')"
        >
          <p class="title-t14-medium" style="color: #595959">
            자기소개 작성 및 수정
          </p>
        </v-btn>
      </div>
    </v-container>
    <v-divider class="border-opacity-100" color="#E8E8E8" thickness="5" />
    <v-list>
      <v-list-item class="px-6">
        <v-list-item-title class="title-t18-bold">
          자기소개 작성 여부
        </v-list-item-title>
        <template v-slot:prepend>
          <IconDocument class="me-4" />
        </template>
        <template v-slot:append>
          <p>{{ auth.userInfo.introductionWritten ? "작성" : "미작성" }}</p>
        </template>
      </v-list-item>
      <v-divider
        class="border-opacity-100 my-2"
        color="#E8E8E8"
        thickness="2"
      />
      <v-list-item class="px-6">
        <v-list-item-title class="title-t18-bold">
          룸메 추천 노출 여부
        </v-list-item-title>
        <p class="title-t11-regular-grey">
          허용 시 다른 유저의 추천에 노출되게 됩니다.
        </p>
        <template v-slot:prepend>
          <IconMainRoommateActive class="me-4" />
        </template>
        <template v-slot:append>
          <label class="form-switch" for="checkbox">
            <input type="checkbox" id="checkbox" v-model="isChecked" />
            <i class="me-0"></i>
          </label>
        </template>
      </v-list-item>
      <v-divider
        class="border-opacity-100 my-2"
        color="#E8E8E8"
        thickness="2"
      />
      <p @click="logout()">로그아웃</p>
    </v-list>
  </v-main>
</template>

<script setup>
const router = useRouter();
const auth = useAuthStore();
const isChecked = ref(false);

onMounted(async () => {
  await auth.myPage();
  isChecked.value = auth.userInfo.putOnRecommend;
});

watch(isChecked, async (value) => {
  console.log(value);
  await auth.putOnRecommend(value);
});
function logout() {
  auth.logout();
  router.push("/login");
}
</script>

<style lang="scss" scoped>
.center {
  justify-content: center;
  align-items: center;
  display: flex;
}
.form-switch {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.form-switch i {
  position: relative;
  display: inline-block;
  margin-right: 0.5rem;
  width: 46px;
  height: 26px;
  background-color: #e6e6e6;
  border-radius: 23px;
  vertical-align: text-bottom;
  transition: all 0.3s linear;
}
.form-switch i::before {
  content: "";
  position: absolute;
  left: 0;
  width: 42px;
  height: 22px;
  background-color: #fff;
  border-radius: 11px;
  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  transition: all 0.25s linear;
}
.form-switch i::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
  transform: translate3d(2px, 2px, 0);
  transition: all 0.2s ease-in-out;
}
.form-switch:active i::after {
  width: 28px;
  transform: translate3d(2px, 2px, 0);
}
.form-switch:active input:checked + i::after {
  transform: translate3d(16px, 2px, 0);
}
.form-switch input {
  display: none;
}
.form-switch input:checked + i {
  background-color: #3867e7;
}
.form-switch input:checked + i::before {
  transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
}
.form-switch input:checked + i::after {
  transform: translate3d(22px, 2px, 0);
}
</style>
