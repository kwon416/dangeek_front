<template>
  <div class="login-container">
    <div class="logo">
      <img src="~/assets/img/logo_title.svg" alt="Dan Geek" />
    </div>
    <form @submit.prevent="submitLogin">
      <input
        type="email"
        v-model="loginData.email"
        placeholder="이메일을 입력하세요"
      />
      <input
        type="password"
        v-model="loginData.password"
        placeholder="비밀번호를 입력하세요"
      />
      <button type="submit" class="login-btn">로그인</button>
    </form>
    <div class="help-links">
      <a href="#">비밀번호 찾기</a> | <a href="#">회원가입</a>
    </div>
  </div>
</template>

<script setup>
const loginData = reactive({
  email: "",
  password: "",
});

const submitLogin = () => {
  console.log(loginData);
  // Implement your login logic here
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}

.logo img {
  max-width: 100px;
  margin: 30px auto;
}

.login-container input {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-btn {
  width: 100%;
  background-color: #007aff;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
}

.help-links {
  margin-top: 20px;
}

.help-links a {
  color: #007aff;
  text-decoration: none;
  margin: 0 10px;
}
</style>
