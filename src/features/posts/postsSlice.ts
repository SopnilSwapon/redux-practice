import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postAPI";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostState {
  post: IPost[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IPostState = {
  post: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<IPost[]>(
  "posts/fetchPosts",
  async () => {
    const posts = await getPost();
    return posts;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message ?? null;
    });
  },
});

export default postsSlice.reducer;
