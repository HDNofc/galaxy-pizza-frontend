import { css } from 'styled-components/macro';
export type ThemeType = typeof variables;

const common = {
  tabletPortrait: '768px',
  tabletLandscape: '1020px',
  desktop: '1280px',
  headerHeightMobile: '48px',
};

const fonts = {
  fontMain: `'Open Sans', arial, helvetica, sans-serif`,
  fontAdditional: `'Roboto', arial, helvetica, sans-serif`,
};

const colors = {
  fontColorTitle: '#000',
  fontColorText: '#5c6370',

  buttonColorDefault: '#027ad6',
  buttonColorTextDefault: '#fff',
  buttonColorFocus: '#0262ad',
  buttonColorActive: '#60a7de',
  buttonColorTextActive: '#0e79cb',

  buttonColorReverse: 'transparent',
  buttonColorReverseFocus: 'transparent',
  buttonColorReverseActive: 'transparent',
  buttonColorTextReverse: '#60a7de',
  buttonColorTextReverseFocus: '#0262ad',
  buttonColorTextReverseActive: '#60a7de',

  linkColorText: '#60a7de',
  linkColorTextFocus: '#0262ad',
  linkColorTextActive: '#60a7de',

  linkColorTextReverse: '#F5F5F5',
  linkColorTextReverseFocus: '#00c4f5',
  linkColorTextReverseActive: '#60a7de',

  radioColorTextFocus: '#0262ad',
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
  colors,
  fonts,
};

export default variables;
