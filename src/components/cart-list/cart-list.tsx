import { PizzaCartItem } from 'redux/cart/contracts/state';

import Button from 'components/button';
import Counter from 'components/counter';

import {
  CartListImage,
  CartListItem,
  DeleteButton,
  ItemBody,
  ItemInfo,
  ItemName,
  ItemShortDescription,
  ItemSummaryPrice,
  StyledCartList,
  ItemPrice,
} from './styles';

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
    <StyledCartList>
      {items.map((item, index) => (
        <CartListItem key={item.cartId}>
          <ItemBody>
            <picture>
              <source type="image/webp" srcSet={item.imageUrl?.full.webp} />
              <CartListImage src={item.imageUrl?.full.jpg} alt="" />
            </picture>
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemShortDescription>{getPizzaItemShortDescription(item)}</ItemShortDescription>
            </ItemInfo>

            <DeleteButton
              as={Button}
              onClick={() => onDeleteItemClick(index)}
              onlyIcon
              icon={<Cross className="cart-list-item-cross" />}
            />
          </ItemBody>

          <ItemSummaryPrice>
            <Counter
              onPlusClick={() => onCounterPlusClick(index)}
              onMinusClick={() => onCounterMinusClick(index)}
              count={item.amount}
            />
            <ItemPrice>{`${item.price} ₽`}</ItemPrice>
          </ItemSummaryPrice>
        </CartListItem>
      ))}
    </StyledCartList>
  );
};

function getPizzaItemShortDescription(item: PizzaCartItem) {
  return `${DOUGH_TYPES[item.dough]}, ${item.size} см${
    item.crust !== 'none' ? `, ${CRUST_TYPES[item.crust]}` : ''
  }`;
}

export default CartList;
