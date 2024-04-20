import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  isDark: boolean
  auth: boolean
}

const initialState: AppState = {
  isDark: true,
  auth: false,
}

export const appStateSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    toggleIsDark: (state) => {
      state.isDark = !state.isDark
    },
    authLogin: (state) => {
      state.auth = true
    },
    authLogout: (state) => {
      state.auth = false
    },
  },
})

export const { authLogin, authLogout, toggleIsDark } = appStateSlice.actions

export default appStateSlice.reducer
