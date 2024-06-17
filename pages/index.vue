<template>
  <v-main style="background-color: #f2f4f6">
    <v-app-bar class="px-6" style="background-color: #f2f4f6">
      <IconLogo />
      <p class="title-t25-main ps-2">DAN GEEK</p>

      <v-spacer></v-spacer>
      <IconNotification @click="router.push('/notification')" />
      <IconMy class="ms-5" @click="router.push('/my')" />
    </v-app-bar>

    <v-container>
      <v-text-field
        rounded="30"
        label="궁금한 것을 적어보세요!"
        bg-color="#fff"
      >
        <template v-slot:prepend-inner>
          <IconSearch />
        </template>
      </v-text-field>

      <div
        class="d-flex title-t18-bold"
        style="
          justify-content: center;
          margin-top: 18px;
          margin-bottom: 18px;
          color: #939393;
        "
      >
        <p
          :class="windowNumber === 0 ? 'active' : ''"
          @click="windowNumber = 0"
          style="padding-right: 9px"
        >
          룸메찾기
        </p>
        <template v-if="windowNumber === 0">
          <IconMainRoommateActive />
        </template>
        <template v-else>
          <IconMainRoommate />
        </template>
        <p
          :class="windowNumber === 1 ? 'active' : ''"
          @click="windowNumber = 1"
          style="padding-right: 9px; margin-left: 36px"
        >
          공동구매
        </p>
        <template v-if="windowNumber === 1">
          <IconMainGroupActive />
        </template>
        <template v-else>
          <IconMainGroup />
        </template>
      </div>

      <v-window v-model="windowNumber">
        <!-- 1. 룸메 찾기 -->
        <v-window-item>
          <v-card rounded="15" class="justify-center align-center">
            <template v-slot:title>
              <p class="title-t16-bold" style="color: #2a5fc5">
                가장 최근 글 Top 3
              </p>
            </template>
            <!-- <template v-slot:text>
              <span>window {{ windowNumber + 1 }}</span>
            </template> -->
            <v-list lines="two">
              <v-list-item
                v-for="index in room.roomList.slice(0, 3)"
                :key="index"
                @click="router.push(`/roommate/detail?id=${index.post_id}`)"
              >
                <template v-slot:title>
                  <p class="title-t11-regular-grey mb-2">
                    <span>{{ index.nickname }}님의 글</span>
                    <span style="padding-left: 11px"
                      >{{ Math.floor(Math.random() * 100) }}분전</span
                    >
                  </p>
                </template>
                <div class="d-flex">
                  <p class="title-t14-medium">{{ index.title }}</p>
                  <v-spacer />
                  <IconForward icon-color="#2A5FC5" />
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-window-item>
        <!-- 2. 공동 구매 -->
        <v-window-item>
          <v-card rounded="15" class="justify-center align-center">
            <template v-slot:title>
              <p class="title-t16-bold" style="color: #2a5fc5">
                가장 최근 글 Top 3
              </p>
            </template>
            <!-- <template v-slot:text>
              <span>window {{ windowNumber + 1 }}</span>
            </template> -->
            <v-list lines="two">
              <v-list-item
                v-for="index in group.groupList.slice(0, 3)"
                :key="index"
                @click="router.push(`/group/detail?id=${index.post_id}`)"
              >
                <template v-slot:title>
                  <p class="title-t11-regular-grey mb-2">
                    <span>{{ index.nickname }}님의 글</span>
                    <span style="padding-left: 11px"
                      >{{ Math.floor(Math.random() * 100) }}분전</span
                    >
                  </p>
                </template>
                <div class="d-flex">
                  <p class="title-t14-medium">{{ index.title }}</p>
                  <v-spacer />
                  <IconForward icon-color="#2A5FC5" />
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-window-item>
      </v-window>
      <v-slide-group
        :show-arrows="false"
        style="width: 100vw; margin-left: -24px"
      >
        <v-slide-group-item v-for="i in 3">
          <v-card rounded="15" class="justify-center align-center meal-card">
            <template v-slot:title>
              <div class="d-flex">
                <p class="title-t19-bold me-2" style="color: #fff">
                  오늘의 조식
                </p>
                <IconRice />
              </div>
            </template>
            <MealContent class="ms-4 mt-3" />
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>
    <v-container>
      <v-btn block :height="53" color="#CED3DC">
        <p style="color: #585858">외박 신청 하기</p>
      </v-btn>
    </v-container>
    <v-spacer></v-spacer>
  </v-main>
</template>

<script setup>
const router = useRouter();
const windowNumber = ref(0);
const room = useRoomStore();
const group = useGroupStore();

definePageMeta({
  title: "Home",
  description: "Home page",
  layout: "home",
});

onMounted(async () => {
  console.log("Home page mounted");
  await room.getRoomList();
  await group.getGroupList();
});
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

.meal-card {
  margin-right: 40px;
  margin-top: 38px;
  padding: 11px 14px 11px 18px;
  width: 284px;
  height: 180px;
  background: linear-gradient(153deg, #79a1e6 13.19%, #3867e7 86.57%);
}
.gnb-span {
  color: #939393;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 9px;
}
</style>
