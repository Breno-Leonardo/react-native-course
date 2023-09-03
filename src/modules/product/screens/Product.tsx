import {RouteProp, useRoute} from '@react-navigation/native';
import Text from '../../../shared/components/text/Text';
import { ProductType } from '../../../shared/types/productType';

export interface ProductParams{
    product: ProductType;
}

const Product = () => {
  const {params} = useRoute<RouteProp<Record<string,ProductParams>>>();
  const {product}= params;
  
  console.log(params)
  return <Text>po</Text>;
};

export default Product;
