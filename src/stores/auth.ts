import { defineStore } from 'pinia'

type UserInfo = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

type State = {
  userInfo: UserInfo | null
  isLoggedIn: boolean
  error: any
  isLoading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    const result: State = { userInfo: null, isLoggedIn: false, error: null, isLoading: false }
    const userLogin = localStorage.getItem('USER_LOGIN')
    if (userLogin) {
      return { userInfo: JSON.parse(userLogin), isLoggedIn: true, error: null, isLoading: false }
    }
    return result
  },
  actions: {
    authRequest() {
      this.$state = {
        ...this.$state,
        userInfo: null,
        isLoggedIn: false,
        error: null,
        isLoading: true
      }
    },
    authSuccess() {
      const userInfo = {
        id: 15,
        username: 'kminchelle',
        email: 'kminchelle@qq.com',
        firstName: 'Jeanne',
        lastName: 'Halvorson',
        gender: 'female',
        image:
          'https://static.vecteezy.com/system/resources/previews/011/483/098/large_2x/anime-cute-girl-free-vector.jpg',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwOTAyNzc1NCwiZXhwIjoxNzA5MDMxMzU0fQ.uacfjhVEXK4sBmPDiVwfSuiexXmWzlWoNt0HUmnOjjw'
      }
      localStorage.setItem('USER_LOGIN', JSON.stringify(userInfo))
      this.$state = {
        ...this.$state,
        userInfo,
        isLoggedIn: true,
        error: null,
        isLoading: false
      }
    },
    authErrors(error?: any) {
      this.$state = {
        ...this.$state,
        userInfo: null,
        isLoggedIn: false,
        error: error,
        isLoading: false
      }
    },
    async logout() {

      // handle API
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      this.$state = {
        ...this.$state,
        userInfo: null,
        isLoggedIn: false,
        error: null,
        isLoading: false
      }
      localStorage.removeItem('USER_LOGIN')
    },
    async login(username: string, password: string) {
      try {
        this.authRequest()
        await new Promise((resolve) => setTimeout(resolve, 1000))
        this.authSuccess()
      } catch {
        this.authErrors()
      }
    }
  }
})
