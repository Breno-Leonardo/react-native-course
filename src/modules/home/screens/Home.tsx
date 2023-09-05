import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';

import { DisplayFlexColumn } from '../../../shared/components/globalStyles/globalView.style';
import Input from '../../../shared/components/input/Input';

import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/productType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import useNavigate from '../../../shared/hooks/useNavigate';
import { URL_PRODUCT } from '../../../shared/constants/constantsUrls';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { ROUTES } from '../../../Navigation';
import { HomeContainer } from '../styles/home.style';
import ProductThumbnail from '../../../shared/components/productThumbnail/Producthumbnail';


const Home = () => {
  const [search, setSearch] = useState('');
  const { navigateTo } = useNavigate();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleGoToProduct = () => {
    navigateTo(ROUTES.SEARCH_PRODUCT, true,{
      search,
    });
  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(event.nativeEvent.text);
  };

  return (
    <View>
      <HomeContainer>
        <Input
          onPressIconRight={handleGoToProduct}
          value={search}
          onChange={handleOnChangeSearch}
          iconRight="search"
        />
      </HomeContainer>
      <DisplayFlexColumn />

      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => <ProductThumbnail margin="0px 8px" product={item} />}
      />
    </View>
  );
};

export default Home;