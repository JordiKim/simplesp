import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsState {
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: NewsState = {
  loading: true,
  error: null,
  data: [],
};

// export const getNews = createAsyncThunk("news/getNews", async (startdate: string, thunkAPI) => {
//   const { data } = await axios.get(
//     `https://newsapi.org/v2/everything?q=Apple&from=${startdate}&sortBy=popularity&apiKey=22577d857a484d1aba1d64f6fa47c3e7`
//   );
//   return data;
// });

export const getNews = createAsyncThunk("news/getNews", async (parm, thunkAPI) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=tw&apiKey=22577d857a484d1aba1d64f6fa47c3e7`
  );
  return data;
});

// createSlice介紹
// 這裡reducers是把action綑綁在一起，所以不用再單獨定義action
// 這裡reducers是一個對象而不是過程，每個對象定義一個action，同時也定義這個action的處理函數
// 因為這裡createSlice本身是面對對象而不是面對過程，所以不用再寫switch語句了
export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending.type]: (state) => {
      state.loading = true;
    },
    [getNews.fulfilled.type]: (state, action) => {
      state.data = action.payload.articles;
      state.loading = false;
      state.error = null;
    },
    [getNews.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});
