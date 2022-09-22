import { useSelector as useReduxSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

// 重新定義useSelector
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// 創建一個新的dispath hook 方法給要使用createAsyncThunk的dispatch傳入createAsyncThunk Action類型做使用
export const useAppDispatch = () => useDispatch<AppDispatch>();
