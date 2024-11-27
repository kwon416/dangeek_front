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
            :class="['message-wrapper', message.type]"
          >
            <!-- 입장/퇴장 메시지 -->
            <div
              v-if="message.type === 'notification'"
              class="notification-message"
            >
              {{ message.text }}
            </div>
            <!-- 일반 채팅 메시지 -->
            <template v-else>
              <div v-if="message.type === 'sent'" class="chat-time">
                {{ formatTime(message.createdAt) }}
              </div>
              <div :class="['message', message.type]">
                <p>{{ message.text }}</p>
              </div>
              <div v-if="message.type === 'received'" class="chat-time">
                {{ formatTime(message.createdAt) }}
              </div>
            </template>
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
        @click="confirmExit"
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
const route = useRoute();
const router = useRouter();
const chat = useChatStore();
const roomId = route.query.id;
const auth = useAuthStore();

// 채팅 메시지를 저장할 ref
const messages = ref([]);

// 컴포넌트가 마운트될 때 채팅 내역 가져오기
onMounted(async () => {
  try {
    const chatHistory = await chat.getChatting(roomId);
    if (chatHistory) {
      messages.value = chatHistory.map((msg) => {
        if (msg.type === "TALK") {
          return {
            text: msg.message,
            type:
              msg.senderNickname === auth.userInfo.nickname
                ? "sent"
                : "received",
            senderNickname: msg.senderNickname,
            createdAt: msg.created_at,
          };
        } else {
          return {
            text: msg.message,
            type: "notification",
            createdAt: msg.created_at,
          };
        }
      });
    }
  } catch (error) {
    console.error("채팅 내역을 가져오는데 실패했습니다:", error);
  }
});

const socket = useNuxtApp().socket;

const newMessage = ref("");

onMounted(() => {});

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

// 시간 포맷팅 함수
const formatTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 || 12;
  return `${ampm} ${formattedHours}:${minutes}`;
};

const confirmExit = async () => {
  if (confirm("퇴장하시겠습니까?")) {
    const result = await chat.exitChatroom(roomId);
    if (result.success) {
      console.log("채팅방에서 퇴장했습니다.");
      if (!auth.userInfo.surveyDone) {
        // 설문조사가 필요하고 아직 하지 않은 경우
        router.push(`/survey/${roomId}`);
      } else {
        // 설문조사가 이미 완료된 경우
        router.push("/chat");
      }
    } else {
      console.error("퇴장 처리 중 오류가 발생했습니다.");
    }
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
  background-color: #fff;
}

.message {
  width: fit-content;
  margin: 10px 0;
  padding: 12px 20px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  position: relative;
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
.message.sent::after,
.message.received::after {
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
}

.message.sent::after {
  border-color: transparent #3867e7 transparent transparent;
  right: 0px;
}

.message.received::after {
  border-color: transparent transparent transparent #e9eaec;
  left: 0px;
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

.notification-message {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  color: #333;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
}

.message-wrapper {
  display: flex;
  flex-direction: column;
  margin: 5px 0;
}

.message-wrapper.sent {
  align-items: flex-end;
}

.message-wrapper.received {
  align-items: flex-start;
}

.notification-message {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 10px auto;
  text-align: center;
  color: #919191;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
</style>
