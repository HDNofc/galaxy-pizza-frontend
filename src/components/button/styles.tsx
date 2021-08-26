import styled, { css } from 'styled-components/macro';
import { Counter as StyledCounter } from '../counter/styles';

interface Props {
  $standard?: boolean;
  $link?: boolean;
  $onlyIcon?: boolean;
}

export const Button = styled.button<Props>`
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  text-align: center;
  text-decoration: none;
  background: none;
  border: 0;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  user-select: none;

  ${({ $standard }) =>
    $standard &&
    css`
      padding: 16px 20px;
      color: ${({ theme }) => theme.colors.buttonColorTextDefault};
      background-color: ${({ theme }) => theme.colors.buttonColorDefault};
      border-radius: 24px;

      > ${Text} {
        display: inline-flex;
      }

      &:focus,
      &:hover {
        background-color: ${({ theme }) => theme.colors.buttonColorFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colors.buttonColorTextActive};
        background-color: ${({ theme }) => theme.colors.buttonColorActive};
      }
    `}

  ${({ $link }) =>
    $link &&
    css`
      color: ${({ theme }) => theme.colors.buttonColorTextReverse};

      > ${Text} {
        display: inline-flex;
      }

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.buttonColorTextReverseFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colors.buttonColorTextReverseActive};
      }
    `}

  ${({ $onlyIcon }) =>
    $onlyIcon &&
    css`
      padding: 2px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      > ${Text} {
        ${({ theme }) => theme.mixins.visuallyHidden}
      }

      > svg {
        width: 100%;
        height: auto;
      }
    `}

  ${StyledCounter} > & {
    width: 20px;
    height: 20px;
    padding: 6px;
  }
`;

export const Text = styled.span``;
