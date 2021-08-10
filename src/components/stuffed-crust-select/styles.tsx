import { StylesConfig } from 'react-select';
import styled from 'styled-components/macro';
import { IReactSelectOption, IsMulti } from './index';

import crustIcon from './icons/crust-icon.svg';
import selectedItemIcon from './icons/selected-icon.svg';

export const StyledStuffedCrustSelect = styled.div``;

export const SelectItemWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 4px 0;
  position: relative;
`;

export const SelectItemImage = styled.img<{ src: string }>`
  border-radius: 28px;
  flex-shrink: 0;
  height: 56px;
  width: 56px;
`;

export const SelectItemText = styled.span`
  color: inherit;
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  padding: 0px 20px 0 8px;
  text-align: left;
`;

// Стилизация react-select
export const reactSelectCustomStyles: StylesConfig<IReactSelectOption, IsMulti> = {
  option: (_provided, state) => ({
    color: state.isSelected ? '#ffd8a6' : state.isFocused ? '#b5a9a7' : '#fff',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.35s',

    '::before': {
      backgroundColor: state.isSelected ? '#ffd8a6' : state.isFocused ? '#fff' : 'transparent',
      backgroundImage: `url("${selectedItemIcon}")`,
      borderRadius: 8,
      content: '""',
      height: 16,
      opacity: state.isSelected ? 1 : 0,
      position: 'absolute',
      right: 4,
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'opacity 0.35s, background-color 0.35s, background-image 0.35s',
      width: 16,
    },

    ':not(:last-child)': {
      '::after': {
        backgroundColor: '#8f6f68',
        bottom: -1,
        content: '""',
        height: 1,
        position: 'absolute',
        right: 0,
        width: 'calc(100% - 72px)',
      },
    },
  }),
  control: (_provided, state) => ({
    display: 'flex',
    boxSizing: 'border-box',
    backgroundColor: state.getValue()
      ? state.getValue()[0].value !== 'none'
        ? '#ededed'
        : '#fff'
      : '#fff',
    backgroundImage: `url("${crustIcon}")`,
    backgroundPosition: '6px',
    backgroundRepeat: 'no-repeat;',
    border: '1px solid #ededed',
    borderColor: state.isFocused ? '#c9c9c9' : '#ededed',
    borderRadius: 100,
    boxShadow: 'none',
    cursor: 'pointer',
    minHeight: 36,
    transition: 'background-color 0.35s, border-color 0.35s',
    width: 76,

    '&:hover': {
      borderColor: '#c9c9c9',
    },
  }),
  singleValue: () => ({
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#70544f',
    border: '2px solid #70544f',
    minHeight: 70,
    right: 'calc(100% - 76px)',
    width: 220,
  }),
  menuList: () => ({
    padding: 10,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0 4px 0 0',

    '&:hover': {
      borderColor: '#ededed',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
