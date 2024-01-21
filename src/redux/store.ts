import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: rootReducer
})