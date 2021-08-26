import { PizzaCartItem } from 'redux/cart/contracts/state';

import Button from 'components/button';
import Counter from 'components/counter';

import * as S from './styles';

import { ReactComponent as Cross } from './icons/cross.svg';

const DOUGH_TYPES = {
  fat: 'Традиционное тесто',
  slim: 'Тонкое тесто',
};

const CRUST_TYPES = {
  none: 'стандартный борт',
  cheese: 'сырный борт',
  sausage: 'колбасный борт',
};

interface Props {
  children?: React.ReactNode;
  items: PizzaCartItem[];
  onDeleteItemClick: (index: number) => void;
  onCounterPlusClick: (index: number) => void;
  onCounterMinusClick: (index: number) => void;
}

const CartList = ({ items, onDeleteItemClick, onCounterPlusClick, onCounterMinusClick }: Props) => {
  return (
    <S.CartList>
      {items.map((item, index) => (
        <S.CartListItem key={item.cartId}>
          <S.ItemBody>
            <picture>
              <source type="image/webp" srcSet={item.imageUrl?.full.webp} />
              <S.CartListImage src={item.imageUrl?.full.jpg} alt="" />
            </picture>
            <S.ItemInfo>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemShortDescription>{getPizzaItemShortDescription(item)}</S.ItemShortDescription>
            </S.ItemInfo>

            <S.DeleteButton
              as={Button}
              onClick={() => onDeleteItemClick(index)}
              onlyIcon
              icon={<Cross className="cart-list-item-cross" />}
            />
          </S.ItemBody>

          <S.ItemSummaryPrice>
            <Counter
              onPlusClick={() => onCounterPlusClick(index)}
              onMinusClick={() => onCounterMinusClick(index)}
              count={item.amount}
            />
            <S.ItemPrice>{`${item.price} ₽`}</S.ItemPrice>
          </S.ItemSummaryPrice>
        </S.CartListItem>
      ))}
    </S.CartList>
  );
};

function getPizzaItemShortDescription(item: PizzaCartItem) {
  return `${DOUGH_TYPES[item.dough]}, ${item.size} см${
    item.crust !== 'none' ? `, ${CRUST_TYPES[item.crust]}` : ''
  }`;
}

export default CartList;
