import {useDispatch, useSelector} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {ProductType} from '../../../shared/types/productType';
import { setProductAction } from '.';


export const useProductReducer = () => {
  const dispatch = useDispatch();
  const {products} = useAppSelector(state => state.productReducer);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductAction(currentProducts));
  };
  return {
    products,
    setProducts,
  };
};
