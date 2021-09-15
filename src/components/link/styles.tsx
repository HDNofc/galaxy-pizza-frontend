import styled, { css } from 'styled-components/macro';
import { Link as _Link } from 'react-router-dom';

interface Props {
  $alternative?: boolean;
  $standard?: boolean;
  $selected?: boolean;
}

export const StyledLink = css<Props>`
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  outline: none;

  ${({ $standard, $selected }) =>
    $standard &&
    css`
      color: ${({ theme }) =>
        $selected ? theme.colorsMeaning.linkColorTextFocus : theme.colorsMeaning.linkColorText};

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colorsMeaning.linkColorTextFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colorsMeaning.linkColorTextActive};
      }
    `};

  ${({ $alternative, $selected }) =>
    $alternative &&
    css`
      color: ${({ theme }) =>
        $selected
          ? theme.colorsMeaning.linkAlternativeColorTextFocus
          : theme.colorsMeaning.linkAlternativeColorText};

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colorsMeaning.linkAlternativeColorTextFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colorsMeaning.linkAlternativeColorTextActive};
      }
    `};
`;

export const Link = styled(_Link)`
  ${StyledLink}
`;

export const NativeLink = styled.a`
  ${StyledLink}
`;

export const Value = styled.span`
  color: ${(props) => props.theme.colorsMeaning.bodyColor};
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  opacity: 0.8;
`;
