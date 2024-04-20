import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app.slice'
import userReducer from './user.slice'

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
