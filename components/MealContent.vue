<template>
  <div class="content-list">
    <div class="column">
      <div class="content-item">{{ currentMenu.main }}</div>
      <div class="content-item">{{ currentMenu.soup }}</div>
      <div class="content-item">{{ currentMenu.side1 }}</div>
    </div>
    <div class="column">
      <div class="content-item">{{ currentMenu.side2 }}</div>
      <div class="content-item">{{ currentMenu.side3 }}</div>
      <div class="content-item">{{ currentMenu.drink }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true, // '오늘의 조식', '오늘의 중식', '내일의 조식', '내일의 중식'
  },
});

// 메뉴 예시 리스트
const menuItems = {
  main: ["쌀밥", "잡곡밥", "김치볶음밥", "비빔밥", "카레라이스"],
  soup: ["미역국", "된장찌개", "김치찌개", "순두부찌개", "계란국", "콩나물국"],
  side1: ["제육볶음", "고등어구이", "닭갈비", "돈까스", "불고기", "갈치구이"],
  side2: ["김치", "깍두기", "열무김치", "총각김치", "오이소박이"],
  side3: ["멸치볶음", "시금치나물", "콩나물무침", "오이무침", "잡채"],
  drink: ["요구르트", "우유", "식혜", "수정과", "오미자차"],
};

// 랜덤으로 메뉴 선택
const getRandomMenu = (category) => {
  const items = menuItems[category];
  return items[Math.floor(Math.random() * items.length)];
};

// 현재 메뉴 구성
const currentMenu = {
  main: getRandomMenu("main"),
  soup: getRandomMenu("soup"),
  side1: getRandomMenu("side1"),
  side2: getRandomMenu("side2"),
  side3: getRandomMenu("side3"),
  drink: getRandomMenu("drink"),
};
</script>

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
