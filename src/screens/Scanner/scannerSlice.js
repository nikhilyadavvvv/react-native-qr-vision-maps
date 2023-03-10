import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  qrdata: '',
};

const scannerSlice = createSlice({
  name: 'scanner',
  initialState,
  reducers: {
    setQrData(state, action) {
      state.qrdata = action.payload;
    },
    resetQrData(state, action) {
      state.qrdata = '';
    },
  },
});

export const {setQrData, resetQrData} = scannerSlice.actions;
export default scannerSlice.reducer;
