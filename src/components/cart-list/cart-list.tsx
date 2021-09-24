import * as S from './cart-list.styles';
import { PizzaCartItem } from 'redux/cart/contracts/state';

import Counter from 'components/counter';
import PizzaImagePlaceholder from 'components/image-placeholder';

import { ReactComponent as CrossIcon } from './icons/cross.svg';
import { ReactComponent as PizzaPlaceholderImage } from 'assets/pizza-placeholder.svg';

import groupDigits from 'helpers/group-digits';

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
  size?: 'small' | 'big';
}

const CartList = ({
  items,
  onDeleteItemClick,
  onCounterPlusClick,
  onCounterMinusClick,
  size = 'small',
}: Props) => {
  return (
    <S.CartList $size={size}>
      {items.map((item, index) => (
        <S.CartListItem key={`${item.cartId}-${item.dough}-${item.size}-${item.crust}`}>
          <S.ItemBody>
            <S.ImagePlaceholder>
              <PizzaImagePlaceholder
                fadeInDelay={0}
                placeholderComponent={<PizzaPlaceholderImage className="pizza-placeholder-image" />}
              >
                <S.Picture>
                  <source type="image/webp" srcSet={item.imageUrl?.full.webp} />
                  <S.CartListImage src={item.imageUrl?.full.jpg} alt="" />
                </S.Picture>
              </PizzaImagePlaceholder>
            </S.ImagePlaceholder>
            <S.ItemInfo>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemShortDescription>{getPizzaItemShortDescription(item)}</S.ItemShortDescription>
              <S.ItemFullDescription>{item.description}</S.ItemFullDescription>
            </S.ItemInfo>

            <S.DeleteButton
              onClick={() => onDeleteItemClick(index)}
              onlyIcon
              icon={<CrossIcon className="cart-list-item-cross" />}
              text="Удалить пиццу из корзины"
            />
          </S.ItemBody>

          <S.ItemSummaryPrice>
            <Counter
              onPlusClick={() => onCounterPlusClick(index)}
              onMinusClick={() => onCounterMinusClick(index)}
              count={item.amount}
            />
            <S.ItemPrice>{`${groupDigits(item.price)} ₽`}</S.ItemPrice>
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
