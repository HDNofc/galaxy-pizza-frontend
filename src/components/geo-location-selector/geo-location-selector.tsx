import Select, { ValueType } from 'react-select';

import * as S from './styles';

interface Props {
  items: IReactSelectOption[];
  defaultValue?: IReactSelectOption;
  onChange: (selectedSideId: string) => void;
}

export interface IReactSelectOption {
  label: string | React.ReactNode;
  value: string;
}

export type IsMulti = false;

const GeoLocationSelector = ({
  onChange,
  items,
  defaultValue = items[2],
  ...otherProps
}: Props): React.ReactElement => {
  // https://github.com/JedWatson/react-select/issues/2902#issuecomment-481194330
  const handleChange = (selectedOption: ValueType<IReactSelectOption, IsMulti>) => {
    const value = (selectedOption as IReactSelectOption).value;
    onChange(value);
  };

  return (
    <S.GeoLocationSelector {...otherProps}>
      <Select
        styles={S.reactSelectCustomStyles}
        isSearchable={false}
        options={items}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <S.Note>изменить</S.Note>
    </S.GeoLocationSelector>
  );
};

export default GeoLocationSelector;
