<template>
  <v-main class="container">
    <TopBar title="모집글 작성" />
    <v-container>
      <div class="d-flex">
        <CustomTextInput />
        <v-select
          class="ms-3"
          max-width="100"
          label="모집인원"
          :items="['1', '2', '3', '4']"
        ></v-select>
      </div>
    </v-container>
  </v-main>
  <v-btn height="53" class="v-btn__gradient mx-6 mb-3"> 등록하기 </v-btn>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  overflow-y: auto;
  height: calc(100vh - 66px);
}
</style>
