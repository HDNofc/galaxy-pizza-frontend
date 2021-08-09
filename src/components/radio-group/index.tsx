import { useRef, useEffect, useCallback } from 'react';

import RadioGroup__Field from './__field/radio-group__field';

import { RadioGroupBox, StyledRadioGroup } from './styles';

export interface IRadioItem {
  id: string;
  value: string | number;
  label: string | number | React.ReactElement;
  checked?: boolean;
}

interface RadioGroupProps {
  name: string;
  items: IRadioItem[];
  onChange: (radioOption: { id: string; value: string | number; checked: boolean }) => void;
}

const RadioGroup = ({ name, items, onChange }: RadioGroupProps) => {
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
    // console.log('useEffect fieldRefs.current = []');
  }, [items]);

  const getSelectedFieldDOM = (selectedId: string): HTMLDivElement => {
    // console.log('getSelectedFieldDOM.selectedId', selectedId);
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
    // console.log('onInputChange.id', id);
    onChange({ id, value, checked });
  };

  return (
    <StyledRadioGroup>
      <RadioGroupBox ref={boxRef} />
      {items &&
        items.map((radio) => (
          <RadioGroup__Field
            ref={addToFieldRefs}
            key={`radio-${radio.id}`}
            id={radio.id}
            mods={{
              checked: radio.checked,
            }}
            name={name}
            value={radio.value}
            onChange={(checked) => onInputChange({ id: radio.id, checked, value: radio.value })}
          >
            {radio.label}
          </RadioGroup__Field>
        ))}
    </StyledRadioGroup>
  );
};

export default RadioGroup;
