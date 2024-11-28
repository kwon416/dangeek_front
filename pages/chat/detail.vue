<template>
  <v-main>
    <v-app-bar class="px-3" extension-height="102">
      <v-btn icon @click="router.back()">
        <IconBackBtn style="margin-left: -16px" />
      </v-btn>
      <IconAvatar1 :width="32" :height="32" />
      <p class="title-t16-bold ps-2">{{ roomName }}</p>
      <!-- <p class="title-t16-bold ps-2" style="color: #939393">nickname</p> -->
      <template v-slot:extension>
        <div class="h-100 px-3 w-100">
          <div
            class="title-t17-bold mb-2"
            style="color: #79a1e6; font-weight: 600 !important"
          >
            진행중
          </div>
          <div class="title-t14-medium" style="color: #939393">
            자유롭게 채팅해보세요
          </div>
          <div class="chat-progress-bar">
            <v-progress-linear
              :model-value="(currentUsers / maxUser) * 100"
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
              <span style="color: #2a5fc5">{{ currentUsers }}</span>
              <span>/</span>
              <span>{{ maxUser }}</span>
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
              <div class="message-time-container">
                <div v-if="message.type === 'sent'" class="chat-time">
                  {{ formatTime(message.createdAt) }}
                </div>
                <div :class="['message', message.type]">
                  <p>{{ message.badWords ? "***" : message.text }}</p>
                </div>
                <div v-if="message.type === 'received'" class="chat-time">
                  {{ formatTime(message.createdAt) }}
                </div>
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
        :disabled="isSending"
      />
      <IconSend
        class="ms-3"
        @click="sendMessage"
        style="padding-top: 3px"
        :disabled="isSending"
      />
    </div>
  </v-main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const chat = useChatStore();
const roomId = route.query.id;
const roomName = ref(route.query.name || "");
const currentUsers = ref(route.query.currentUsers || 0);
const maxUser = ref(route.query.maxUser || 0);
const auth = useAuthStore();

const socket = useNuxtApp().socket;

const newMessage = ref("");
// 채팅 메시지를 저장할 ref
const messages = ref([]);

const messagesContainer = ref(null);

const stompClient = ref(null);

// 채팅창을 맨 아래로 스크롤하는 함수
const scrollToBottom = () => {
  nextTick(() => {
    const container = messagesContainer.value;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  });
};
const getChatting = async () => {
  const chatHistory = await chat.getChatting(roomId);
  if (chatHistory) {
    messages.value = chatHistory.map((msg) => {
      if (msg.type === "TALK") {
        return {
          text: msg.message,
          type:
            msg.senderNickname === auth.userInfo.nickname ? "sent" : "received",
          senderNickname: msg.senderNickname,
          createdAt: msg.created_at,
          badWords: msg.badWords,
        };
      } else {
        return {
          text: msg.message,
          type: "notification",
          createdAt: msg.created_at,
          badWords: false,
        };
      }
    });
    nextTick(() => {
      scrollToBottom();
    });
  }
};
// 컴포넌트가 마운트될 때 채팅 내역 가져오기
onMounted(async () => {
  try {
    await getChatting();
    await setInterval(getChatting, 2000);
    // 웹 소켓 연결
    socket.emit("joinRoom", roomId);

    socket.on("newMessage", (msg) => {
      messages.value.push({
        text: msg.text,
        type:
          msg.senderNickname === auth.userInfo.nickname ? "sent" : "received",
        senderNickname: msg.senderNickname,
        createdAt: msg.createdAt,
        badWords: msg.badWords,
      });
      scrollToBottom();
    });
  } catch (error) {
    console.error("채팅 내역을 가져오는데 실패했습니다:", error);
  }
});

onMounted(() => {});

const isSending = ref(false); // 메시지 전송 상태

const sendMessage = async () => {
  if (newMessage.value.trim() && !isSending.value) {
    isSending.value = true;
    const result = await chat.sendMessage(roomId, newMessage.value);
    if (result.success) {
      if (result.message.badWords) {
        alert("부적절한 언어가 포함되어 있습니다.");
      }

      messages.value.push({
        text: result.message.text,
        type: "sent",
        senderNickname: result.message.senderNickname,
        createdAt: result.message.createdAt,
        badWords: result.message.badWords,
      });
      newMessage.value = "";

      scrollToBottom();
    } else {
      console.error("메시지 전송에 실패했습니다.");
    }
    isSending.value = false;
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
    if (result) {
      console.log("채팅방에서 퇴장했습니다.");
      router.push("/chat"); // 채팅 목록 페이지로 이동
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
  text-align: left;
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

.message-time-container {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.message-wrapper.sent .message-time-container {
  justify-content: flex-end;
}

.chat-time {
  color: #919191;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  min-width: fit-content;
  margin-bottom: 10px;
}
</style>
