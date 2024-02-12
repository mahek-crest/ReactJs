// 1. configure store -- comes from core redux

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'

export const store = configureStore({
  reducer: todoReducer
})