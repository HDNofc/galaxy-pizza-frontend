import { Dispatch } from 'redux';

import Button from 'components/button';

import {
  Description,
  CartImage,
  CartTitle,
  StyledCart,
  CartTitleTotalCount,
  CartHeader,
  ClearCartButton,
  TotalPrice,
  CartFooter,
  TotalPriceText,
} from './styles';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { clearCart, plusCartItem, minusCartItem, removeCartItem } from 'redux/cart/action';

import cartImage from './images/cart.jpg';
import cartImage2x from './images/cart@2x.jpg';
import cartImage3x from './images/cart@3x.jpg';

import CartList from 'components/cart-list';

interface CartProps {
  children?: React.ReactNode;
}

const Cart = (_props: CartProps): React.ReactElement => {
  const cart = useAppSelector((state: RootState) => state.cart);
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

  const { items } = cart;

  return (
    <StyledCart>
      <CartHeader>
        <CartTitle>
          Корзина <CartTitleTotalCount>({cart.totalCount})</CartTitleTotalCount>
        </CartTitle>
        <ClearCartButton as={Button} text="очистить" link onClick={onClearCartClick} />
      </CartHeader>

      {items.length > 0 ? (
        <CartList
          items={items}
          onCounterMinusClick={onCounterMinusClick}
          onCounterPlusClick={onCounterPlusClick}
          onDeleteItemClick={onDeleteItemClick}
        />
      ) : (
        <CartImage
          src={cartImage}
          srcSet={`${cartImage2x} 2x, ${cartImage3x} 3x" alt="empty cart`}
          alt=""
        />
      )}

      {items.length > 0 ? (
        <CartFooter>
          <TotalPriceText>Сумма заказа:</TotalPriceText>{' '}
          <TotalPrice>{`${cart.totalPrice} ₽`}</TotalPrice>
        </CartFooter>
      ) : (
        <Description>Корзина пуста. Выберите пиццу из меню</Description>
      )}
    </StyledCart>
  );
};

export default Cart;
