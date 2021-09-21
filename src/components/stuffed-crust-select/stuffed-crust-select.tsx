import Select, { ValueType } from 'react-select';
import { DOUGH_STUFFED_CRUSTS } from './constants';

import * as S from './stuffed-crust-select.styles';

interface Props {
  stuffedCrusts: string[];
  selectedStuffedCrust: number | string;
  onChange: (selectedSideId: string) => void;
}

export interface IReactSelectOption {
  label: string | React.ReactNode;
  value: string;
}

export type IsMulti = false;

const StuffedCrustSelect = ({ onChange, stuffedCrusts }: Props): React.ReactElement => {
  const availableOptions = (stuffedCrusts: Props['stuffedCrusts']) => {
    const availableCrusts = DOUGH_STUFFED_CRUSTS.filter((crust) => {
      if (stuffedCrusts.includes(crust.value)) {
        return crust;
      }
      return false;
    });

    return doughStuffedCrusts(availableCrusts);
  };

  const doughStuffedCrusts = (options: any) => {
    return options.map((crust: any) => {
      return {
        value: crust.value,
        label: (
          <S.SelectItemWrapper>
            <S.SelectItemImage src={crust.imageUrl} />
            <S.SelectItemText>{crust.text}</S.SelectItemText>
          </S.SelectItemWrapper>
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
    <S.StuffedCrustSelect>
      <Select
        styles={S.reactSelectCustomStyles}
        isSearchable={false}
        options={crusts}
        defaultValue={crusts[crusts.length - 1]}
        onChange={handleChange}
        menuPlacement={'top'}
      />
    </S.StuffedCrustSelect>
  );
};

export default StuffedCrustSelect;
