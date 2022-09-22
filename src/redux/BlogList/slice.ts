import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BlogListState {
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: BlogListState = {
  loading: true,
  error: null,
  data: [],
};

export const getBlogList = createAsyncThunk(
  "blogList/getBlogList",
  async (parameters: { page: number; size: number }, thunkAPI) => {
    const { data } = await axios.post("http://localhost:9528/api/blog/list", {
      page: parameters.page,
      size: parameters.size,
    });
    return data;
  }
);

// createSlice介紹
// 這裡reducers是把action綑綁在一起，所以不用再單獨定義action
// 這裡reducers是一個對象而不是過程，每個對象定義一個action，同時也定義這個action的處理函數
// 因為這裡createSlice本身是面對對象而不是面對過程，所以不用再寫switch語句了
export const BlogListSlice = createSlice({
  name: "blogList",
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogList.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getBlogList.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [getBlogList.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});
