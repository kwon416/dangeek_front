<template>
  <v-app-bar class="px-6">
    <IconMoney />
    <div style="height: 60px; margin-left: -2px; margin-top: auto">
      <p class="title">
        <span style="color: #79a1e6; font-size: 20px">name</span> 님!
      </p>
      <p class="title">공동구매로 돈을 절약해보세요.</p>
    </div>

    <v-spacer></v-spacer>
    <IconNotification @click="router.push('/notification')" />
    <IconMy class="ms-5" @click="router.push('/my')" />
  </v-app-bar>
</template>

<script setup>
definePageMeta({
  title: "Group",
  description: "Group page",
  layout: "home",
});
</script>

<style lang="scss" scoped>
.title {
  color: #121212;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
}
</style>
