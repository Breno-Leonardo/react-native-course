import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/productType';

interface productStore {
  products: ProductType[];
}
const initialState: productStore = {
  products: [],
};
export const productSlice = createSlice({
  name: 'productReducer',
  initialState,

  reducers: {
    setProductAction: (state, action:PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const {setProductAction} = productSlice.actions;

export default productSlice.reducer;
