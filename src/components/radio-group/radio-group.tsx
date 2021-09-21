import { useRef, useEffect, useCallback } from 'react';
import RadioGroupField from 'components/radio-group-field';

import * as S from './radio-group.styles';

export interface IRadioItem {
  id: string;
  value: string | number;
  label: string | number | React.ReactElement;
  checked?: boolean;
}

interface Props {
  name: string;
  items: IRadioItem[];
  onChange: (radioOption: { id: string; value: string | number; checked: boolean }) => void;
}

const RadioGroup = ({ name, items, onChange }: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);

  const setRadioBoxPosition = useCallback((): void => {
    const boxWidth = `${100 / items.length}%`;
    const selectedIndex = items.findIndex((el) => el.checked === true);
    const boxPosition = `${(100 / items.length) * selectedIndex}%`;

    if (boxRef.current) {
      boxRef.current.style.cssText = `
        width: ${boxWidth};
        left: ${boxPosition};
      `;
    }
  }, [items]);

  useEffect(() => {
    if (items && items.length > 0) {
      setRadioBoxPosition();
    }
  }, [items, setRadioBoxPosition]);

  const onInputChange = ({
    id,
    value,
    checked,
  }: {
    id: string;
    value: string | number;
    checked: boolean;
  }): void => {
    onChange({ id, value, checked });
  };

  return (
    <S.RadioGroup>
      <S.RadioGroupBox ref={boxRef} />
      {items &&
        items.map((radio) => (
          <RadioGroupField
            key={`radio-${radio.id}`}
            id={radio.id}
            checked={radio.checked}
            name={name}
            value={radio.value}
            onChange={(checked) => onInputChange({ id: radio.id, checked, value: radio.value })}
          >
            {radio.label}
          </RadioGroupField>
        ))}
    </S.RadioGroup>
  );
};

export default RadioGroup;
