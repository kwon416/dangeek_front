<template>
  <v-main>
    <TopBar title="개인정보 수정" />
    <v-container>
      <CustomTextInput label="이름" v-model="data.name" />
      <CustomTextInput label="학과" v-model="data.major" />
      <CustomTextInput label="학년" v-model="data.grade" />
      <v-label class="text-subtitle-1 mb-2">성별</v-label>
      <div class="gender-buttons mb-4">
        <button
          type="button"
          :class="data.sex === '남자' ? 'selected-btn' : 'unselected-btn'"
          @click="data.sex = '남자'"
        >
          남
        </button>
        <button
          type="button"
          :class="data.sex === '여자' ? 'selected-btn' : 'unselected-btn'"
          @click="data.sex = '여자'"
        >
          여
        </button>
      </div>
      <CustomTextInput
        label="자기소개"
        v-model="data.contents"
        multiline
        :rows="4"
      />
      <v-label class="text-subtitle-1 mt-4">성격</v-label>
      <div class="d-flex align-center gap-2 mb-2">
        <CustomTextInput
          v-model="newPersonality"
          placeholder="성격을 입력해주세요"
          @keyup.enter="addPersonality"
        />
        <v-btn
          icon
          density="compact"
          class="custom-height"
          @click="addPersonality"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <v-chip-group v-model="data.personality" column multiple>
        <v-chip
          v-for="(item, index) in data.personality"
          :key="index"
          closable
          @click:close="removePersonality(index)"
        >
          {{ item }}
        </v-chip>
      </v-chip-group>
      <v-label class="text-subtitle-1 mt-4">취미</v-label>
      <v-chip-group v-model="data.hobbies" column multiple>
        <v-chip
          v-for="item in hobbyOptions"
          :key="item.id"
          :value="item.value"
          filter
        >
          {{ item.label }}
        </v-chip>
      </v-chip-group>
      <v-spacer />
      <v-btn
        class="v-btn__gradient mt-6 mb-5"
        block
        :height="41"
        rounded="15"
        @click="saveIntroduce()"
      >
        저장하기
      </v-btn>
    </v-container>
  </v-main>
</template>

<script setup>
const auth = useAuthStore();
const router = useRouter();

const data = ref(
  auth.userIntroduce || {
    name: "",
    major: "",
    grade: "",
    sex: "남자",
    contents: "",
    personality: [],
    hobbies: [],
  }
);

const newPersonality = ref("");

const hobbyOptions = [
  { id: 0, value: "game", label: "게임" },
  { id: 1, value: "sports", label: "스포츠" },
  { id: 2, value: "read", label: "독서" },
  { id: 3, value: "art", label: "예술" },
  { id: 4, value: "movie", label: "영화" },
  { id: 5, value: "collect", label: "수집" },
  { id: 6, value: "craft", label: "공예" },
  { id: 7, value: "observe", label: "관찰" },
  { id: 8, value: "travel", label: "여행" },
  { id: 9, value: "music", label: "음악" },
  { id: 10, value: "cook", label: "요리" },
  { id: 11, value: "photo", label: "사진" },
];

async function saveIntroduce() {
  try {
    const result = await auth.saveIntroduce(data.value);
    if (result) {
      router.back();
    } else {
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    alert("저장 중 오류가 발생했습니다. 다시 시도해주세요.");
  }
}

function addPersonality() {
  if (newPersonality.value.trim()) {
    data.value.personality.push(newPersonality.value.trim());
    newPersonality.value = "";
  }
}

function removePersonality(index) {
  data.value.personality.splice(index, 1);
}
</script>

<style lang="scss" scoped>
.custom-height {
  height: 40px;
  width: 40px;
  margin-top: -22px;
}

.gender-buttons {
  display: flex;
  width: 100%;
  gap: 10px;

  button {
    flex: 1;
    height: 40px;
    border: none;
    border-radius: 16px;
    font-size: 14px;
    cursor: pointer;

    &.selected-btn {
      background-color: rgb(var(--v-theme-primary));
      color: white;
    }

    &.unselected-btn {
      background-color: #f5f5f5;
      color: #616161;
    }
  }
}
</style>
