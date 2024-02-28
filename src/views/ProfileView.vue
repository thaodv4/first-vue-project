<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const { userInfo } = storeToRefs(auth)
</script>

<template>
  <div class="profile">
    <div>
      <div>
        <img class="avatar" :src="userInfo?.image" :alt="userInfo?.username" />
      </div>
      <div>
        <strong>Name:</strong>
        {{ userInfo?.firstName + ' ' + userInfo?.lastName }}
      </div>
      <div>
        <strong>Email:</strong>
        {{ userInfo?.email }}
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: flex;
  justify-content: center;
  .avatar {
    width: 300px;
  }
  strong {
    font-weight: 700;
  }
}
</style>
