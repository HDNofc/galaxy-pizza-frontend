import groupDigits from 'helpers/group-digits';
import * as S from './floating-cart.styles';

import { ReactComponent as CartIcon } from './icons/shopping-cart-icon.svg';

interface Props {
  amount: number;
}

const FloatingCart = ({ amount, ...otherProps }: Props): React.ReactElement => {
  return (
    <S.FloatingCart to="/order" {...otherProps}>
      <CartIcon />
      <S.Text>{groupDigits(amount)} ₽</S.Text>
    </S.FloatingCart>
  );
};

export default FloatingCart;
