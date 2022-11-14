import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from './adviceApi';

const initialState = {
  data: {},
  status: '',
  message: '',
};

export const fetchAdviceData = createAsyncThunk(
  'adviceData/fetchAdviceData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      return rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data`
      );
    }
  }
);

export const adviceSlice = createSlice({
  name: 'adviceData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdviceData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdviceData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchAdviceData.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export default adviceSlice.reducer;
