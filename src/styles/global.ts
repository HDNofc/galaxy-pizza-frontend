import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';
import fonts from './fonts';

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    min-width: 320px;
    font-size: 16px;
    line-height: 22px;
  }

  body {
    font-family: 'Open Sans', arial, helvetica, sans-serif;
    background-color: #f8f8f8;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
