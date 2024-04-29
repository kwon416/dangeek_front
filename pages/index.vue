<template>
  <v-main>
    <v-app-bar class="px-6">
      <IconLogo />
      <p class="title-t25-main ps-2">DAN GEEK</p>

      <v-spacer></v-spacer>
      <IconNotification />
      <IconMy class="ms-5" />
    </v-app-bar>

    <v-container>
      <v-text-field rounded="30" label="궁금한 것을 적어보세요!">
        <template v-slot:prepend-inner>
          <IconSearch />
        </template>
      </v-text-field>

      <div
        class="d-flex title-t18-bold"
        style="justify-content: center; margin-top: 40px; color: #939393"
      >
        <p
          :class="windowNumber === 0 ? 'active' : ''"
          @click="windowNumber = 0"
        >
          룸메찾기
        </p>
        <p
          :class="windowNumber === 1 ? 'active' : ''"
          @click="windowNumber = 1"
        >
          공동구매
        </p>
      </div>

      <v-window v-model="windowNumber">
        <!-- 1. 룸메 찾기 -->
        <v-window-item>
          <v-card
            :border="true"
            rounded="15"
            class="justify-center align-center"
            height="245px"
          >
            <template v-slot:title> 가장 최근 글 Top 3 </template>
            <template v-slot:text>
              <span>window {{ windowNumber + 1 }}</span>
            </template>
          </v-card>
        </v-window-item>
        <!-- 2. 공동 구매 -->
        <v-window-item>
          <v-card
            :border="true"
            rounded="15"
            class="justify-center align-center"
            height="245px"
          >
            <template v-slot:title> 가장 최근 글 Top 3 </template>
            <template v-slot:text>
              <span>window {{ windowNumber + 1 }}</span>
            </template>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
  </v-main>

  <v-card title="login" @click="router.push('/login')"> </v-card>
</template>

<script setup>
const router = useRouter();
const windowNumber = ref(0);
</script>

<style scoped>
.v-label {
  color: #939393;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.active {
  color: #3867e7;
}
</style>
