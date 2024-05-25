<template>
  <v-app>
    <slot />
    <v-bottom-navigation horizontal>
      <v-btn
        class="no-background-hover"
        style="width: 20%"
        @click="navigateTo('/')"
        :active="false"
      >
        <template v-if="homeActive">
          <IconHomeActive />
        </template>
        <template v-else>
          <IconHome />
        </template>
        <span :class="homeActive ? 'active' : ''">홈</span>
      </v-btn>
      <v-btn
        class="no-background-hover"
        style="width: 20%"
        @click="navigateTo('/roommate')"
        :active="false"
      >
        <template v-if="roommateActive">
          <IconRoommateActive />
        </template>
        <template v-else>
          <IconRoommate />
        </template>
        <span :class="roommateActive ? 'active' : ''">룸메이트</span>
      </v-btn>
      <v-btn
        class="no-background-hover"
        style="width: 20%"
        @click="navigateTo('/chat')"
        :active="false"
      >
        <template v-if="chatActive">
          <IconChatActive />
        </template>
        <template v-else>
          <IconChat />
        </template>
        <span :class="chatActive ? 'active' : ''">채팅하기</span>
      </v-btn>
      <v-btn
        class="no-background-hover"
        style="width: 20%"
        @click="navigateTo('/group')"
        :active="false"
      >
        <template v-if="groupActive">
          <IconGroupActive />
        </template>
        <template v-else>
          <IconGroup />
        </template>
        <span :class="groupActive ? 'active' : ''">공동구매</span>
      </v-btn>
      <v-btn
        class="no-background-hover"
        style="width: 20%"
        @click="navigateTo('/complain')"
        :active="false"
      >
        <template v-if="complainActive">
          <IconComplainActive />
        </template>
        <template v-else>
          <IconComplain />
        </template>
        <span :class="complainActive ? 'active' : ''">민원신청</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup>
const route = useRoute();

const homeActive = ref();
const roommateActive = ref();
const chatActive = ref();
const groupActive = ref();
const complainActive = ref();

watch(
  () => route.path,
  (path) => {
    console.log(route.path);
    setActive();
  }
);
onMounted(() => {
  setActive();
});

function setActive() {
  homeActive.value = false;
  roommateActive.value = false;
  chatActive.value = false;
  groupActive.value = false;
  complainActive.value = false;

  if (route.path.includes("/roommate")) roommateActive.value = true;
  else if (route.path.includes("/chat")) chatActive.value = true;
  else if (route.path.includes("/group")) groupActive.value = true;
  else if (route.path.includes("/complain")) complainActive.value = true;
  else homeActive.value = true;
}
</script>

<style scoped>
span {
  /* color: #79a1e6; */
  color: #939393;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 9px;
}
button {
  padding: 0;
}
.no-background-hover {
  background-color: transparent;
  border: none;
}
.active {
  color: #79a1e6;
}
</style>
