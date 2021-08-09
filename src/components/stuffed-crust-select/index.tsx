// export default {};
import Select, { ValueType } from 'react-select';
import { DOUGH_STUFFED_CRUSTS } from './constants';

import {
  reactSelectCustomStyles,
  SelectItemImage,
  SelectItemText,
  SelectItemWrapper,
  StyledStuffedCrustSelect,
} from './styles';

interface IStuffedCrustSelectProps {
  mix?: string | string[];
  stuffedCrusts: string[];
  selectedStuffedCrust: number | string;
  onChange: (selectedSideId: string) => void;
}

export interface IReactSelectOption {
  label: string | React.ReactNode;
  value: string;
}

export type IsMulti = false;

const StuffedCrustSelect = (props: IStuffedCrustSelectProps): React.ReactElement => {
  const { onChange, selectedStuffedCrust, stuffedCrusts } = props;

  const availableOptions = (stuffedCrusts: IStuffedCrustSelectProps['stuffedCrusts']) => {
    const availableCrusts = DOUGH_STUFFED_CRUSTS.filter((crust) => {
      if (stuffedCrusts.includes(crust.value)) {
        return crust;
      }
    });

    return doughStuffedCrusts(availableCrusts);
  };

  const doughStuffedCrusts = (options: any) => {
    return options.map((crust: any) => {
      return {
        value: crust.value,
        label: (
          <SelectItemWrapper>
            <SelectItemImage src={crust.imageUrl} />
            <SelectItemText>{crust.text}</SelectItemText>
          </SelectItemWrapper>
        ),
      };
    });
  };

  // https://github.com/JedWatson/react-select/issues/2902#issuecomment-481194330
  const handleChange = (selectedOption: ValueType<IReactSelectOption, IsMulti>) => {
    const value = (selectedOption as IReactSelectOption).value;
    onChange(value);
  };

  const crusts = availableOptions(stuffedCrusts).reverse();

  return (
    <StyledStuffedCrustSelect>
      <Select
        styles={reactSelectCustomStyles}
        isSearchable={false}
        options={crusts}
        defaultValue={crusts[crusts.length - 1]}
        onChange={handleChange}
        menuPlacement={'top'}
      />
    </StyledStuffedCrustSelect>
  );
};

export default StuffedCrustSelect;
