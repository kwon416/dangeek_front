<template>
  <div class="content-list">
    <div class="column">
      <div class="content-item">쌀밥</div>
      <div class="content-item">돈육김치찌개</div>
      <div class="content-item">치커리겉절이</div>
      <div class="content-item">도시락김</div>
      <!-- 추가 컨텐츠 항목 -->
    </div>
    <div class="column">
      <div class="content-item">음료수</div>
      <div class="content-item">김치</div>
      <div class="content-item">샐러드</div>
      <!-- 추가 컨텐츠 항목 -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content-list {
  display: flex;
}

.column {
  flex: 1;
}

.content-item {
  color: #fff;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
}
</style>
