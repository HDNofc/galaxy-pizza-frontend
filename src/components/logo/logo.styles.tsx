import styled from 'styled-components/macro';
import { ReactComponent as _LogoIcon } from './icon/logo.svg';

export const Logo = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colorsPalette.white};
  font-size: 18px;
  line-height: 18px;
  word-wrap: normal;
`;

export const LogoIcon = styled(_LogoIcon)`
  height: 24px;
  margin-right: 6px;
`;
