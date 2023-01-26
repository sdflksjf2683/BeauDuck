import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// 전체 컨설팅 리스트 불러오기
export const getConsultingList = createAsyncThunk(
  'help/getConsulting',
  async () => {
    const res = await axios.get('/consult');
    return res.data;
  },
);

// 새로운 컨설팅 추가
export const postNewConsulting = createAsyncThunk(
  'help/newConsulting',
  async (newConsulting) => {
    const res = await axios.post('/consult', newConsulting);
    return res.data;
  },
);

export const consultSlice = createSlice({
  name: 'consulting',
  initialState: {
    consultingList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConsultingList.fulfilled, (state, action) => {
      state.consultingList = action.payload;
    });
  },
});

export default consultSlice.reducer;
