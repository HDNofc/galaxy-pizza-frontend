import styled, { css } from 'styled-components/macro';
import { Counter as StyledCounter } from '../counter/styles';

interface Props {
  standard?: boolean;
  link?: boolean;
  onlyIcon?: boolean;
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

  ${({ standard }) =>
    standard &&
    css`
      padding: 16px 20px;
      color: ${(props) => props.theme.colors.buttonColorTextDefault};
      background-color: ${(props) => props.theme.colors.buttonColorDefault};
      border-radius: 24px;

      > ${Text} {
        display: inline-flex;
      }

      &:focus,
      &:hover {
        background-color: ${(props) => props.theme.colors.buttonColorFocus};
      }

      &:active {
        color: ${(props) => props.theme.colors.buttonColorTextActive};
        background-color: ${(props) => props.theme.colors.buttonColorActive};
      }
    `}

  ${({ link }) =>
    link &&
    css`
      color: ${(props) => props.theme.colors.buttonColorTextReverse};

      > ${Text} {
        display: inline-flex;
      }

      &:focus,
      &:hover {
        color: ${(props) => props.theme.colors.buttonColorTextReverseFocus};
      }

      &:active {
        color: ${(props) => props.theme.colors.buttonColorTextReverseActive};
      }
    `}

    ${({ onlyIcon }) =>
    onlyIcon &&
    css`
      padding: 2px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      > ${Text} {
        ${(props) => props.theme.mixins.visuallyHidden}
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
