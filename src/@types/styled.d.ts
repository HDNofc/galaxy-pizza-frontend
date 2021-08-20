import {} from 'styled-components/macro';
import { ThemeType } from 'styles/variables';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
