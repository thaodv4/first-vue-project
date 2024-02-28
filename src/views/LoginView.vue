<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()
const router = useRouter()
const username = ref('')
const password = ref('')

const usernameError = ref('')
const passwordError = ref('')

const handleSubmit = async () => {
  usernameError.value = ''
  passwordError.value = ''
  auth.login(username.value, password.value)
}
watchEffect(() => {
  if (auth.isLoggedIn) {
    router.push({
      name: 'home'
    })
  }
})
</script>

<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" :error="usernameError" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" :error="passwordError" />
      </div>
      <button type="submit" :disabled="auth.isLoading">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
}
.form-group {
  margin-bottom: 10px;
}

.error {
  color: red;
  font-size: 0.8rem;
}
</style>
