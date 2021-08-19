import Button from 'components/button';

import { StyledCounter, Value } from './styles';
import { ReactComponent as Minus } from './icons/minus.svg';
import { ReactComponent as Plus } from './icons/plus.svg';

interface CounterProps {
  children?: React.ReactNode;
  onMinusClick: () => void;
  onPlusClick: () => void;
  count: number;
}

const Counter = ({ count = 0, onMinusClick, onPlusClick }: CounterProps): React.ReactElement => {
  return (
    <StyledCounter>
      <Button standard onlyIcon icon={<Minus />} text="Добавить пиццу" onClick={onMinusClick} />
      <Value>{count}</Value>
      <Button standard onlyIcon icon={<Plus />} text="Отнять пиццу" onClick={onPlusClick} />
    </StyledCounter>
  );
};

export default Counter;
