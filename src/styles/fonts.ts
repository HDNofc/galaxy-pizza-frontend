import { css } from 'styled-components/macro';

import OpenSans300Woff2 from 'fonts/open-sans/open-sans-300.woff2';
import OpenSans300Woff from 'fonts/open-sans/open-sans-300.woff';
import OpenSans600Woff2 from 'fonts/open-sans/open-sans-600.woff2';
import OpenSans600Woff from 'fonts/open-sans/open-sans-600.woff';
import OpenSans700Woff2 from 'fonts/open-sans/open-sans-700.woff2';
import OpenSans700Woff from 'fonts/open-sans/open-sans-700.woff';
import OpenSans800Woff2 from 'fonts/open-sans/open-sans-800.woff2';
import OpenSans800Woff from 'fonts/open-sans/open-sans-800.woff';
import OpenSansRegularWoff2 from 'fonts/open-sans/open-sans-regular.woff2';
import OpenSansRegularWoff from 'fonts/open-sans/open-sans-regular.woff';

import Roboto500Woff2 from 'fonts/roboto/roboto-500.woff2';
import Roboto500Woff from 'fonts/roboto/roboto-500.woff';
import Roboto700Woff2 from 'fonts/roboto/roboto-700.woff2';
import Roboto700Woff from 'fonts/roboto/roboto-700.woff';
import Roboto900Woff2 from 'fonts/roboto/roboto-900.woff2';
import Roboto900Woff from 'fonts/roboto/roboto-900.woff';
import RobotoRegularWoff2 from 'fonts/roboto/roboto-regular.woff2';
import RobotoRegularWoff from 'fonts/roboto/roboto-regular.woff';

import Montserrat500Woff2 from 'fonts/montserrat/montserrat-500.woff2';
import Montserrat500Woff from 'fonts/montserrat/montserrat-500.woff';
import Montserrat600Woff2 from 'fonts/montserrat/montserrat-600.woff2';
import Montserrat600Woff from 'fonts/montserrat/montserrat-600.woff';
import MontserratRegularWoff2 from 'fonts/montserrat/montserrat-regular.woff2';
import MontserratRegularWoff from 'fonts/montserrat/montserrat-regular.woff';

const fonts = css`
  // Open Sans
  @font-face {
    font-weight: 300;
    font-family: 'Open Sans';
    font-style: normal;
    src: url(${OpenSans300Woff2}) format('woff2'), url(${OpenSans300Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Open Sans';
    font-style: normal;
    src: url(${OpenSansRegularWoff2}) format('woff2'), url(${OpenSansRegularWoff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 600;
    font-family: 'Open Sans';
    font-style: normal;
    src: url(${OpenSans600Woff2}) format('woff2'), url(${OpenSans600Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Open Sans';
    font-style: normal;
    src: url(${OpenSans700Woff2}) format('woff2'), url(${OpenSans700Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Open Sans';
    font-style: normal;
    src: url(${OpenSans800Woff2}) format('woff2'), url(${OpenSans800Woff}) format('woff');
    font-display: swap;
  }

  // Roboto
  @font-face {
    font-weight: 400;
    font-family: 'Roboto';
    font-style: normal;
    src: url(${RobotoRegularWoff2}) format('woff2'), url(${RobotoRegularWoff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: 'Roboto';
    font-style: normal;
    src: url(${Roboto500Woff2}) format('woff2'), url(${Roboto500Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Roboto';
    font-style: normal;
    src: url(${Roboto700Woff2}) format('woff2'), url(${Roboto700Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Roboto';
    font-style: normal;
    src: url(${Roboto900Woff2}) format('woff2'), url(${Roboto900Woff}) format('woff');
    font-display: swap;
  }

  // Montserrat
  @font-face {
    font-weight: 500;
    font-family: 'Montserrat';
    font-style: normal;
    src: url(${Montserrat500Woff2}) format('woff2'), url(${Montserrat500Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 600;
    font-family: 'Montserrat';
    font-style: normal;
    src: url(${Montserrat600Woff2}) format('woff2'), url(${Montserrat600Woff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Montserrat';
    font-style: normal;
    src: url(${MontserratRegularWoff2}) format('woff2'),
      url(${MontserratRegularWoff}) format('woff');
    font-display: swap;
  }
`;

export default fonts;
