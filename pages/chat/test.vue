<template>
  <div class="container">
    <div class="chat-window">
      <div class="message left">
        <p>안녕하세요~ 룸메 구하시는 분 맞으시죠?</p>
        <span class="time">오후 12:15</span>
      </div>
      <div class="message right">
        <p>네 맞아요~ 자기소개는 확인 하셨나요?</p>
        <span class="time">오후 12:16</span>
      </div>
      <div class="message left">
        <p>네네 확인했어요</p>
        <span class="time">오후 12:16</span>
      </div>
      <div class="message right">
        <p>혹시 아침잠이 많으신가요?</p>
        <span class="time">오후 12:16</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f7f7f7;
}

.chat-window {
  width: 300px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.message {
  position: relative;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #f1f0f0;
  max-width: 80%;
}

.message.left {
  align-self: flex-start;
  background-color: #e1f7d5;
}

.message.right {
  align-self: flex-end;
  background-color: #c2f0fc;
}

.message.left::after,
.message.right::after {
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
}

.message.left::after {
  border-color: transparent #e1f7d5 transparent transparent;
  left: -20px;
  top: 10px;
}

.message.right::after {
  border-color: transparent transparent transparent #c2f0fc;
  right: -20px;
  top: 10px;
}

.time {
  display: block;
  font-size: 12px;
  color: #888;
  text-align: right;
  margin-top: 5px;
}
</style>
