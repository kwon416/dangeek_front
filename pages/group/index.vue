<template>
  <v-main>
    <v-app-bar class="px-6">
      <IconMoney />
      <div style="height: 60px; margin-left: -2px; margin-top: auto">
        <p class="title">
          <span style="color: #79a1e6; font-size: 20px">
            {{ auth.userInfo.nickname }}
          </span>
          님!
        </p>
        <p class="title">공동구매로 돈을 절약해보세요.</p>
      </div>
      <v-spacer></v-spacer>
      <IconNotification @click="router.push('/notification')" />
      <IconMy class="ms-5" @click="router.push('/my')" />
    </v-app-bar>
    <v-slide-group>
      <v-chip-group
        class="mt-9 mb-5 ms-6"
        v-model="selection"
        selected-class="selected-chip"
        column
        mandatory
      >
        <v-chip
          rounded="30"
          v-for="size in sizes"
          :key="size"
          :text="size"
          :value="size"
          style="width: 111px; height: 39px; justify-content: center"
        ></v-chip>
      </v-chip-group>
    </v-slide-group>
    <v-window v-model="selection" style="background-color: #f2f4f6">
      <v-window-item :value="sizes[0]">
        <v-container>
          <v-card
            v-for="i in group.groupList"
            v-bind:key="i.post_id"
            class="pa-6 mb-2"
            rounded="15"
            @click="router.push(`/group/detail?id=${i.post_id}`)"
          >
            <div class="d-flex" style="justify-content: start">
              <img :src="i.imageUrl" alt="desc" />
              <p class="title-t16-medium ps-3">{{ i.title }}</p>
            </div>
            <div class="card-footer">
              <div class="views pt-2">{{ i.chatRoomResponseDto?.name }}</div>
              <div class="chat-progress-bar">
                <v-progress-linear
                  :model-value="
                    (i.chatRoomResponseDto?.currentUsers /
                      i.chatRoomResponseDto?.maxUser) *
                    100
                  "
                  bgColor="grey"
                  :rounded="true"
                  :roundedBar="true"
                  height="7"
                  style="width: 106px"
                />
              </div>
              <div class="main_image">
                <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
                <p class="main_image_text title-t11-regular">
                  <span style="color: #2a5fc5">{{
                    i.chatRoomResponseDto?.currentUsers
                  }}</span>
                  <span>/</span>
                  <span>{{ i.chatRoomResponseDto?.maxUser }}</span>
                </p>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-window-item>
      <v-window-item :value="sizes[1]">
        <v-container>
          <v-card
            v-for="i in 7"
            :key="i"
            class="pa-6 mb-2"
            rounded="15"
            @click="router.push('/group/detail')"
          >
            <div class="d-flex" style="justify-content: start">
              <img
                src="https://picsum.photos/200/300"
                alt="Image description"
              />
              <p class="title-t16-medium ps-3">
                동원 개성 왕만두 2.24 kg/김치, 감자만두 2봉
              </p>
            </div>
            <div class="card-footer">
              <div class="views pt-2">15명이 이 글을 보고있어요</div>
              <div class="chat-progress-bar">
                <v-progress-linear
                  :model-value="50"
                  bgColor="grey"
                  :rounded="true"
                  :roundedBar="true"
                  height="7"
                  style="width: 106px"
                />
              </div>
              <div class="main_image">
                <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
                <p class="main_image_text title-t11-regular">
                  <span style="color: #2a5fc5">2</span>
                  <span>/</span>
                  <span>4</span>
                </p>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-window-item>
      <v-window-item :value="sizes[2]">
        <v-container>
          <v-card
            v-for="i in 7"
            :key="i"
            class="pa-6 mb-2"
            rounded="15"
            @click="router.push('/group/detail')"
          >
            <div class="d-flex" style="justify-content: start">
              <img
                src="https://picsum.photos/200/300"
                alt="Image description"
              />
              <p class="title-t16-medium ps-3">비엔나 소시지(냉장) 1kg 3봉</p>
            </div>
            <div class="card-footer">
              <div class="views pt-2">15명이 이 글을 보고있어요</div>
              <div class="chat-progress-bar">
                <v-progress-linear
                  :model-value="50"
                  bgColor="grey"
                  :rounded="true"
                  :roundedBar="true"
                  height="7"
                  style="width: 106px"
                />
              </div>
              <div class="main_image">
                <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
                <p class="main_image_text title-t11-regular">
                  <span style="color: #2a5fc5">2</span>
                  <span>/</span>
                  <span>4</span>
                </p>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-window-item>
      <v-window-item :value="sizes[3]">
        <v-container>
          <v-card
            v-for="i in 7"
            :key="i"
            class="pa-6 mb-2"
            rounded="15"
            @click="router.push('/group/detail')"
          >
            <div class="d-flex" style="justify-content: start">
              <img
                src="https://picsum.photos/200/300"
                alt="Image description"
              />
              <p class="title-t16-medium ps-3">프로틴 코코아 2kg 2개</p>
            </div>
            <div class="card-footer">
              <div class="views pt-2">15명이 이 글을 보고있어요</div>
              <div class="chat-progress-bar">
                <v-progress-linear
                  :model-value="50"
                  bgColor="grey"
                  :rounded="true"
                  :roundedBar="true"
                  height="7"
                  style="width: 106px"
                />
              </div>
              <div class="main_image">
                <img src="@/assets/icons/roommate/Icon-marker.svg" alt="" />
                <p class="main_image_text title-t11-regular">
                  <span style="color: #2a5fc5">2</span>
                  <span>/</span>
                  <span>4</span>
                </p>
              </div>
            </div>
          </v-card>
        </v-container>
      </v-window-item>
    </v-window>
  </v-main>
  <v-btn
    variant="flat"
    color="white"
    rounded="30"
    height="39"
    to="/group/write"
    style="
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      border: 1.5px solid #2a5fc5;
    "
  >
    <template v-slot:prepend>
      <v-icon icon="mdi-pencil" color="#79A1E6" size="15"></v-icon>
    </template>
    <p class="title-t14-medium" style="color: #595959">글 쓰기</p>
  </v-btn>
</template>

<script setup>
const router = useRouter();
const selection = ref("배달음식");
const sizes = ["배달음식", "냉동식품", "냉장식품", "기타식품"];
const auth = useAuthStore();
const group = useGroupStore();

onMounted(async () => {
  await group.getGroupList();
});

definePageMeta({
  title: "Group",
  description: "Group page",
  layout: "home",
});
</script>

<style lang="scss" scoped>
img {
  border-radius: 10%;
  min-width: 71px;
  max-width: 71px;
  min-height: 71px;
  max-height: 71px;
}
.title {
  color: #121212;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
}
.selected-chip {
  background-color: #e4ecfa;
  color: #2a5fc5;
  border: 1px solid #2a5fc5;
}
.card-content {
  padding: 15px;
}
.card-content h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-footer .views {
  font-size: 12px;
  color: #666;
}
.main_image {
  position: absolute;
  right: 12px;
  bottom: 32px;
}
.main_image_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -80%);
}
.chat-progress-bar {
  position: absolute;
  bottom: 28px;
  right: 24px;
}
</style>
