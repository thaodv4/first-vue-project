<script setup lang="ts">
import { useRouter } from 'vue-router'
import CommonHeader from './components/CommonHeader.vue'
import { RouterView } from 'vue-router'
import { ref, watchEffect } from 'vue'
const route = useRouter()
console.log(route.currentRoute.value.meta)
const isLoginTemplate = ref(false)
watchEffect(() => {
  if (route.currentRoute.value.path === '/login') {
    isLoginTemplate.value = true
  } else {
    isLoginTemplate.value = false
  }
})
</script>

<template>
  <template v-if="!isLoginTemplate">
    <CommonHeader />
    <RouterView />
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped></style>
