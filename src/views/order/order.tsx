import { Dispatch } from 'redux';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { clearCart, minusCartItem, plusCartItem, removeCartItem } from 'redux/cart/action';

import OrderLayout from 'layouts/order-layout';
import AppLayout from 'components/app-layout';
import CartList from 'components/cart-list';

import useMount from '../../hooks/use-mount';

const Order = () => {
  const cart = useAppSelector(({ cart }: RootState) => cart);
  const dispatch: Dispatch<any> = useAppDispatch();

  useMount(() => {
    window.scrollTo(0, 0);
  });

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
    <AppLayout>
      <OrderLayout
        totalCount={totalCount}
        onClearCartClick={onClearCartClick}
        totalPrice={totalPrice}
        cartList={
          <CartList
            size="big"
            items={items}
            onCounterMinusClick={onCounterMinusClick}
            onCounterPlusClick={onCounterPlusClick}
            onDeleteItemClick={onDeleteItemClick}
          />
        }
      />
    </AppLayout>
  );
};

export default Order;
