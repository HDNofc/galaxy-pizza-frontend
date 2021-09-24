import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';
import fonts from './fonts';

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    height: 0;
    min-height: 100%;
    min-width: 320px;
    font-size: 16px;
    line-height: 22px;
    font-family: 'Open Sans', arial, helvetica, sans-serif;
    background-color: #f8f8f8;
  }

  img {
    width: 100%;
    height: auto;
  }

  #root {
    height: 100%;
  }
`;
