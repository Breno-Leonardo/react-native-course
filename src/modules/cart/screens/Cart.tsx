import {useEffect} from 'react';
import Text from '../../../shared/components/text/Text';
import {useCartReducer} from '../../../store/reducers/cartReducer/useCartReducer';
import {CartType} from '../../../shared/types/cartType';
import {useRequest} from '../../../shared/hooks/useRequest';
import { URL_CART } from '../../../shared/constants/constantsUrls';
import { MethodEnum } from '../../../shared/enums/methods.enum';

const Cart = () => {
  const {cart, setCart} = useCartReducer();
  const {request} = useRequest();
  useEffect(() => {
    request<CartType>({
        url:URL_CART,
        method:MethodEnum.GET,
        saveGlobal:setCart
    });
  }, []);
  console.log(cart)
  return <Text>cart</Text>;
};

export default Cart;
