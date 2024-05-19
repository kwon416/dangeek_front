<template>
  <v-main>
    <TopBar title="마이페이지" />
    <v-container>
      <IconAvatar1 :width="88" :height="88" style="margin: 0 auto" />
      <div style="justify-content: center; align-items: center; display: flex">
        <div style="width: 15px"></div>
        <span class="title-t20-bold mx-2">name</span>
        <v-icon icon="mdi-pencil" color="#939393" size="15"></v-icon>
      </div>
      <div style="justify-content: center; align-items: center; display: flex">
        <p class="title-t16-medium" style="color: #939393">email</p>
      </div>
      <v-btn style="margin: 20px auto">자기소개 작성 및 수정</v-btn>
    </v-container>
  </v-main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
