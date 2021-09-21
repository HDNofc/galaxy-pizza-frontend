import { css } from 'styled-components/macro';
import { colorsMeaning, colors as colorsPalette } from './colors';

export type ThemeType = typeof variables;

const common = {
  tabletPortrait: '768px',
  tabletLandscape: '1020px',
  desktop: '1280px',
  headerHeightMobile: '50px',
  headerHeightDesktop: '70px',
  navHeight: '52px',
};

const fonts = {
  fontMain: `'Open Sans', arial, helvetica, sans-serif`,
  fontAdditional: `'Montserrat', arial, helvetica, sans-serif`,
};

const media = {
  tabletPortrait: `(min-width: ${common.tabletPortrait})`,
  tabletLandscape: `(min-width: ${common.tabletLandscape})`,
  desktop: `(min-width: ${common.desktop})`,
};

const mixins = {
  visuallyHidden: () => css`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  `,
};

const variables = {
  common,
  media,
  mixins,
  colorsMeaning,
  colorsPalette,
  fonts,
};

export default variables;
