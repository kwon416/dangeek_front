<template>
  <v-main class="container">
    <TopBar title="모집글 작성" />
    <v-container>
      <div class="d-flex mb-5">
        <CustomTextInput label="제목을 입력하세요" />
        <div style="width: 123px">
          <v-select
            class="ms-3"
            max-width="100"
            rounded="23"
            density="compact"
            color="#79A1E6"
            :items="['1', '2', '3', '4']"
          >
            <template v-slot:label>
              <p
                style="
                  color: #79a1e6;
                  font-family: Pretendard;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                "
              >
                모집인원
              </p>
            </template>
          </v-select>
        </div>
      </div>
      <CustomTextArea label="내용을 입력하세요" />
      <v-spacer />
      <v-btn height="53" class="v-btn__gradient mb-3 w-100"> 등록하기 </v-btn>
    </v-container>
  </v-main>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  overflow-y: auto;
  height: calc(100vh - 66px);
}
</style>
