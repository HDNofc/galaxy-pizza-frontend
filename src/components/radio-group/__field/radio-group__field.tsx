import React from 'react';
import { Input, StyledRadioGroupField, Label } from './styles';

interface RadioGroupFieldProps {
  mods?: {
    checked?: boolean;
    disabled?: boolean;
  };
  id?: string;
  value: string | number;
  name: string;
  children: React.ReactNode;
  onChange: (checked: boolean) => void;
}

const RadioGroup__Field = React.forwardRef<HTMLDivElement, RadioGroupFieldProps>((props, ref) => {
  const { mods = {}, id, value, name, children, onChange } = props;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <StyledRadioGroupField ref={ref}>
      <Input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={mods.checked}
        disabled={mods.disabled}
        onChange={onInputChange}
      />
      <Label htmlFor={id}>{children}</Label>
    </StyledRadioGroupField>
  );
});

export default RadioGroup__Field;
