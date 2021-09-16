import { Dispatch } from 'redux';

import Button from 'components/button';

import * as S from './styles';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { clearCart, plusCartItem, minusCartItem, removeCartItem } from 'redux/cart/action';

import cartImage from './images/cart.jpg';
import cartImage2x from './images/cart@2x.jpg';
import cartImage3x from './images/cart@3x.jpg';

import CartList from 'components/cart-list';

interface Props {
  children?: React.ReactNode;
}

const Cart = (_props: Props): React.ReactElement => {
  const cart = useAppSelector(({ cart }: RootState) => cart);
  const dispatch: Dispatch<any> = useAppDispatch();

  const onCounterPlusClick = (index: number) => {
    dispatch(plusCartItem(index));
  };

  const onCounterMinusClick = (index: number) => {
    dispatch(minusCartItem(index));
  };

  const onDeleteItemClick = (index: number) => {
    dispatch(removeCartItem(index));
  };

  const onClearCartClick = () => {
    dispatch(clearCart());
  };

  const { items, totalCount, totalPrice } = cart;

  return (
    <S.Cart>
      <S.Header>
        <S.Title>
          Корзина <S.CartTotalCount>({totalCount})</S.CartTotalCount>
        </S.Title>
        <S.ClearCartButton as={Button} text="очистить" link onClick={onClearCartClick} />
      </S.Header>

      {items.length > 0 ? (
        <CartList
          items={items}
          onCounterMinusClick={onCounterMinusClick}
          onCounterPlusClick={onCounterPlusClick}
          onDeleteItemClick={onDeleteItemClick}
        />
      ) : (
        <S.CartImage src={cartImage} srcSet={`${cartImage2x} 2x, ${cartImage3x} 3x`} alt="" />
      )}

      {items.length > 0 ? (
        <S.Footer>
          <S.TotalPriceText>Сумма заказа:</S.TotalPriceText>{' '}
          <S.TotalPrice>{`${totalPrice} ₽`}</S.TotalPrice>
        </S.Footer>
      ) : (
        <S.Description>Корзина пуста. Выберите пиццу из меню</S.Description>
      )}
    </S.Cart>
  );
};

export default Cart;
