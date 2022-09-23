import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BlogListSlice } from "./BlogList/slice";
import { todoSlice } from "./Todolist/slice";

const rootReducer = combineReducers({
  blogList: BlogListSlice.reducer,
  todo: todoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// 一般來說store的類型稱為RootState
// 數據類型可以在store.getState中取得
// typeof store.getState 需要通過類型的反向注入使用ReturnType從泛型中獲得
// 這樣就可以獲得目前store中的類型
export type RootState = ReturnType<typeof store.getState>;

// 需要把store的dispatch類型提取出來
export type AppDispatch = typeof store.dispatch;

export default store;
