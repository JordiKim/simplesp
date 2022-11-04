import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BiState {
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: BiState = {
  loading: true,
  error: null,
  data: [],
};

export const getBi = createAsyncThunk("bi/getBi", async (parm, thunkAPI) => {
  const { data } = await axios.get(
    `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`
  );
  return data;
});

// createSlice
// 這裡reducers是把action綑綁在一起，所以不用再單獨定義action
// 這裡reducers是一個對象而不是過程，每個對象定義一個action，同時也定義這個action的處理函數
// 因為這裡createSlice本身是面對對象而不是面對過程，所以不用再寫switch語句了
export const BiSlice = createSlice({
  name: "bi",
  initialState,
  reducers: {},
  extraReducers: {
    [getBi.pending.type]: (state) => {
      state.loading = true;
    },
    [getBi.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getBi.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});
