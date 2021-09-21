import styled from 'styled-components/macro';
import { StylesConfig } from 'react-select';

import { IReactSelectOption, IsMulti } from './geo-location-selector';

import variables from 'styles/variables';

import locationIcon from './icons/location-icon.svg';

export const GeoLocationSelector = styled.div`
  position: relative;
`;

export const Note = styled.span`
  padding: 0 34px 0;
  color: ${({ theme }) => theme.colorsPalette.silver};
  font-size: 14px;
  line-height: 16px;

  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

// Стилизация react-select
export const reactSelectCustomStyles: StylesConfig<IReactSelectOption, IsMulti> = {
  singleValue: () => ({
    color: 'inherit',
    cursor: 'pointer',
    fontFamily: variables.fonts.fontAdditional,
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '18px',

    [`@media ${variables.media.desktop}`]: {
      fontSize: '16px',
      lineHeight: '16px',
    },
  }),
  option: (_, state) => ({
    color: state.isSelected
      ? variables.colorsPalette.orangeWeb
      : state.isFocused
      ? variables.colorsPalette.dimGray
      : variables.colorsPalette.white,
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.2s',
    padding: '8px 0',
  }),
  control: (_, state) => ({
    color: state.isFocused ? variables.colorsPalette.orangeWeb : variables.colorsPalette.white,
    display: 'flex',
    boxSizing: 'border-box',
    backgroundPosition: '6px',
    backgroundRepeat: 'no-repeat;',
    boxShadow: 'none',
    cursor: 'pointer',
    paddingLeft: 34,
    transition: 'background-color 0.2s, border-color 0.2s',

    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    '&:hover': {
      color: variables.colorsPalette.orangeWeb,
    },
  }),
  menu: (provided) => ({
    ...provided,
    top: 18,
    backgroundColor: variables.colorsPalette.oxfordBlue,
    border: 'none',
    width: 'max-content',
    minWidth: '100%',
  }),
  menuList: () => ({
    padding: '12px 20px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0 4px 0 0',

    '&:hover': {
      borderColor: '#ededed',
    },
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  container: (provided) => ({
    ...provided,
    position: 'static',
    paddingLeft: 0,

    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 24,
      height: 24,
      backgroundImage: `url("${locationIcon}")`,

      [`@media ${variables.media.desktop}`]: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
  }),
};
