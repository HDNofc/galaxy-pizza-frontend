import * as S from './order-layout.css';
import Button from 'components/button';
import Link from 'components/link';

import cartImage from './images/cart.jpg';

interface Props {
  cartList: React.ReactNode;
  onClearCartClick: () => void;
  totalCount: number;
  totalPrice: number;
}

const OrderLayout = ({
  cartList,
  totalCount,
  totalPrice,
  onClearCartClick,
}: Props): React.ReactElement => {
  return (
    <S.OrderLayout>
      <S.OrderLayoutContent>
        <S.Header>
          <S.Title>
            Корзина <S.CartTotalCount>({totalCount})</S.CartTotalCount>
          </S.Title>
          <S.ClearCartButton as={Button} text="очистить" link onClick={onClearCartClick} />
        </S.Header>

        <S.Body>{cartList}</S.Body>

        <S.Footer>
          {totalPrice > 0 ? (
            <>
              <S.PriceWrapper>
                <S.TotalPriceText>Сумма заказа:</S.TotalPriceText>{' '}
                <S.TotalPrice>{`${totalPrice} ₽`}</S.TotalPrice>
              </S.PriceWrapper>
              <S.FooterButtons>
                <S.GoMainMenuButton as={Link} to="/" $secondary $large>
                  Вернуться в меню
                </S.GoMainMenuButton>
                <S.OrderButton standard large>
                  Оформить заказ
                </S.OrderButton>
              </S.FooterButtons>
            </>
          ) : (
            <>
              <S.CartImage src={cartImage} alt="" />
              <S.Description>
                Корзина пуста. Выберите пиццу из{' '}
                <Link to="/" standard>
                  меню
                </Link>
              </S.Description>
            </>
          )}
        </S.Footer>
      </S.OrderLayoutContent>
    </S.OrderLayout>
  );
};

export default OrderLayout;
