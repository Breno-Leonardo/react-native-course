import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserType} from '../../../shared/types/userType';
import {GlobalModalType} from '../../../shared/components/modal/globalModal/GlobalModal';

interface GlobalStore {
  modal: GlobalModalType;
}

const initialState: GlobalStore = {
  modal: {
    visible: false,
    title:"",
    text: "",
  },
};
export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,

  reducers: {
    setModalAction: (state, action: PayloadAction<GlobalModalType>) => {
      state.modal = action.payload;
    },
  },
});

export const {setModalAction} = globalSlice.actions;

export default globalSlice.reducer;
