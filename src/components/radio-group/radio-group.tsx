import { useRef, useEffect, useCallback } from 'react';
import RadioGroupField from 'components/radio-group-field';

import * as S from './styles';

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
  const fieldRefs = useRef<HTMLDivElement[]>([]);

  const addToFieldRefs = (field: HTMLDivElement): void => {
    if (field && !fieldRefs.current.includes(field)) {
      fieldRefs.current.push(field);
    }
  };

  const setRadioBoxPosition = useCallback(
    (selectedFieldDOM: HTMLDivElement | null): void => {
      const boxWidth = `${100 / items.length}%`;

      if (boxRef.current && selectedFieldDOM) {
        boxRef.current.style.cssText = `
        width: ${boxWidth};
        left: ${selectedFieldDOM.offsetLeft}px;
      `;
      }
    },
    [items]
  );

  useEffect(() => {
    if (items && items.length > 0) {
      const getSelectedId = (items: IRadioItem[]) => items.filter((item) => item.checked)[0].id;
      const selectedFieldDOM = getSelectedFieldDOM(getSelectedId(items));

      setRadioBoxPosition(selectedFieldDOM);
    }
  }, [items, setRadioBoxPosition]);

  useEffect(() => {
    fieldRefs.current = [];
  }, [items]);

  const getSelectedFieldDOM = (selectedId: string): HTMLDivElement => {
    return fieldRefs.current.filter((field) => field.children[0].id === selectedId)[0];
  };

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
            ref={addToFieldRefs}
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
