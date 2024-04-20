<template>
  <h1>홈페이지</h1>
  <v-card title="login" @click="router.push('/login')"> </v-card>
</template>

<script setup>
const router = useRouter();
const ui = {
  background: "bg-white dark:bg-slate-900",
};
</script>

<style lang="scss" scoped></style>
