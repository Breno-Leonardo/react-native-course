import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import {useRequest} from '../../hooks/useRequest';
import {theme} from '../../themes/theme';
import {ProductType} from '../../types/productType';
import Text from '../text/Text';
import {textTypes} from '../text/textTypes';
import {ProductImage, ProductInsertCart, ProductThumbnailContainer} from './productThumbnail.style';
import {URL_CART} from '../../constants/constantsUrls';
import {MethodEnum} from '../../enums/methods.enum';
import {ROUTES} from '../../../Navigation';
import {Icon} from '../../icon/Icon';
import useNavigate from '../../hooks/useNavigate';
import {convertNumberToMoney} from '../../functions/money';

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

const AMOUNT_DEFAULT = 1;

const ProductThumbnail = ({product, margin}: ProductThumbnailProps) => {
  const {navigateTo} = useNavigate();
  const {request, loading} = useRequest();

  const handleInsertProductInCart = () => {
    request<unknown>({
      url: URL_CART,
      method: MethodEnum.POST,
      body: {
        productId: product.id,
        amount: AMOUNT_DEFAULT,
      },
      message: 'Inserido com sucesso!',
    });
  };

  const handleGoToProduct = () => {
    navigateTo(ROUTES.PRODUCT, true, {
      product,
    });
  };

  return (
    <ProductThumbnailContainer onPress={handleGoToProduct} margin={margin}>
      <ProductImage source={{uri: product.image}} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGUALR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLD}>
        {convertNumberToMoney(product.price)}
      </Text>
      <ProductInsertCart onPress={handleInsertProductInCart}>
        {loading ? (
          <ActivityIndicator color={theme.colors.neutralTheme.white} />
        ) : (
          <Icon name="cart" color={theme.colors.neutralTheme.white} />
        )}
      </ProductInsertCart>
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
