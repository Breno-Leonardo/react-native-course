import {useEffect} from 'react';
import Text from '../../../shared/components/text/Text';
import {useProductReducer} from '../../../store/reducers/productReducer/useProductReducer';
import {Touchable, TouchableOpacity, View} from 'react-native';
import {useRequest} from '../../../shared/hooks/useRequest';
import {URL_PRODUCT} from '../../../shared/constants/constantsUrls';
import {MethodEnum} from '../../../shared/enums/methods.enum';
import {ProductType} from '../../../shared/types/productType';
import useNavigate from '../../../shared/hooks/useNavigate';
import {ROUTES} from '../../../Navigation';

const Home = () => {
  const {products, setProducts} = useProductReducer();
  const {request} = useRequest();
  const {navigateTo} = useNavigate();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleGoToProduct = (product: ProductType) => {
    navigateTo(ROUTES.PRODUCT, true, {
      product,
    });
  };

  return (
    <View>
      {products.map(product => (
        <TouchableOpacity onPress={()=> handleGoToProduct(product)} key={product.id}>
          <Text>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
