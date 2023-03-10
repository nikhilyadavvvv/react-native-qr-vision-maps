import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  navigateTo: {},
};

const descriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    setNavigateTo(state, action) {
      state.navigateTo = action.payload;
    },
  },
});

export const {setNavigateTo} = descriptionSlice.actions;
export default descriptionSlice.reducer;
