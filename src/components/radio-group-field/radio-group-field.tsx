import React from 'react';
import * as S from './radio-group-field.styles';

interface Props {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  value: string | number;
  name: string;
  children: React.ReactNode;
  onChange: (checked: boolean) => void;
}

const RadioGroupField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { checked, disabled, id, value, name, children, onChange } = props;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <S.RadioGroupField ref={ref}>
      <S.Input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onInputChange}
      />
      <S.Label htmlFor={id} $selected={checked}>
        {children}
      </S.Label>
    </S.RadioGroupField>
  );
});

export default RadioGroupField;
