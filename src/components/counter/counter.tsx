import Button from 'components/button';

import * as S from './counter.styles';
import { ReactComponent as Minus } from './icons/minus.svg';
import { ReactComponent as Plus } from './icons/plus.svg';

interface Props {
  children?: React.ReactNode;
  onMinusClick: () => void;
  onPlusClick: () => void;
  count?: number;
}

const Counter = ({
  count = 0,
  onMinusClick,
  onPlusClick,
  ...otherProps
}: Props): React.ReactElement => {
  return (
    <S.Counter {...otherProps}>
      <Button standard onlyIcon icon={<Minus />} text="Отнять пиццу" onClick={onMinusClick} />
      <S.Value>{count}</S.Value>
      <Button standard onlyIcon icon={<Plus />} text="Добавить пиццу" onClick={onPlusClick} />
    </S.Counter>
  );
};

export default Counter;
