<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { RouterLink, useRouter } from 'vue-router'
const auth = useAuthStore()
const router = useRouter();
const handleLogout = async () => {
  await auth.logout()
  router.replace("/login")

}
</script>
<template>
  <header>
    <h1>First Page</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li>
          <RouterLink to="/profile">
            <img :src="auth.userInfo?.image" alt="" />
          </RouterLink>
        </li>
        <li>
          <button @click="handleLogout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 2em;
  margin: 0;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px;
  align-items: center;
}

nav li {
  list-style: none;
  & img {
    width: 40px;
    display: block;
    border-radius: 50%;
    scale: 1.2;
  }
}

nav a {
  text-decoration: none;
  display: block;
  color: #333;
}
</style>
