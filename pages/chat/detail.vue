<template>
  <v-main>
    <v-app-bar class="px-3" extension-height="102">
      <v-btn icon @click="router.back()">
        <IconBackBtn style="margin-left: -16px" />
      </v-btn>
      <IconAvatar1 :width="32" :height="32" />
      <p class="title-t16-bold ps-2">name</p>
      <p class="title-t16-bold ps-2" style="color: #939393">nickname</p>
      <template v-slot:extension>
        <div class="h-100 px-3 w-100">
          <div
            class="title-t17-bold mb-2"
            style="color: #79a1e6; font-weight: 600 !important"
          >
            진행중
          </div>
          <div class="title-t14-medium" style="color: #939393">
            일찍자고 일찍 일어나는 룸메이트 구해요
          </div>
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
      </template>
    </v-app-bar>
    <v-divider class="border-opacity-100" color="#E8E8E8" thickness="1" />
    <v-container class="py-0">
      <div class="chat-window">
        <div class="messages" ref="messagesContainer">
          <div
            v-for="(message, index) in messages"
            :key="index"
            style="display: flex"
            :class="['message-wrapper', message.type]"
          >
            <div v-if="message.type === 'sent'" class="chat-time">
              오후 12:15
            </div>
            <div :class="['message', message.type]">
              <p>{{ message.text }}</p>
            </div>
            <div v-if="message.type === 'received'" class="chat-time">
              오후 12:15
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div class="input-area">
      <v-icon
        icon="mdi-plus"
        color="#656565"
        size="30"
        style="margin-top: 5px; margin-right: 8px"
      ></v-icon>
      <v-text-field
        v-model="newMessage"
        rounded="23"
        base-color="#E8E8E8"
        density="compact"
        bg-color="#E8E8E8"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="메세지 보내기"
      />
      <IconSend class="ms-3" @click="sendMessage" style="padding-top: 3px" />
    </div>
  </v-main>
</template>

<script setup>
const router = useRouter();
const messages = ref([
  { text: "Hello!", type: "received" },
  { text: "Hi there!", type: "sent" },
]);

const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ text: newMessage.value, type: "sent" });
    newMessage.value = "";
  }
  nextTick(() => {
    scrollToBottom();
  });
};

const scrollToBottom = () => {
  const container = messagesContainer.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};
</script>

<style scoped>
.main_image {
  position: absolute;
  right: 12px;
  bottom: 24px;
}
.main_image_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -80%);
}
.chat-progress-bar {
  position: absolute;
  bottom: 20px;
  right: 12px;
}

.chat-window {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 258px);
  width: 100%;
  margin: auto;
}

.messages {
  flex: 2;
  overflow-y: auto;
  background-color: #f9f9f9;
}

.message {
  width: fit-content;
  margin: 10px 0;
  padding: 12px 20px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
}
.message-wrapper.sent {
  align-self: end;
  justify-content: end;
}
.chat-time {
  align-self: self-end;
  padding-bottom: 8px;
  padding-left: 9px;
  padding-right: 9px;
  color: #919191;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 181.818% */
}

.message.received {
  background-color: #e9eaec;
  align-self: flex-start;
  color: #121212;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
}

.message.sent {
  background-color: #3867e7;
  align-self: flex-end;
  text-align: right;
  color: #fff;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
}

.input-area {
  position: fixed;
  width: 100%;
  height: 92px;
  bottom: 0;
  display: flex;
  padding: 10px;
  background-color: #fff;

  align-items: start;
  box-shadow: 0px -6px 10px #0000001a;
}

.input-area input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.input-area button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.input-area button:hover {
  background-color: #0056b3;
}
</style>
