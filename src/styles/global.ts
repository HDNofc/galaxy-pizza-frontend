import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';
import fonts from './fonts';

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  html,
  body {
    height: 100%;
    min-width: 320px;
  }

  body {
    font-family: 'Open Sans', arial, helvetica, sans-serif;
  }
`;
