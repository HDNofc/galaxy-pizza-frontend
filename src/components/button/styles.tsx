import styled, { css } from 'styled-components/macro';
import { Counter as StyledCounter } from '../counter/styles';

interface Props {
  $standard?: boolean;
  $secondary?: boolean;
  $link?: boolean;
  $large?: boolean;
  $medium?: boolean;
  $onlyIcon?: boolean;
  $selected?: boolean;
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
      color: ${({ theme }) => theme.colorsMeaning.buttonStandardColorText};
      background-color: ${({ theme }) => theme.colorsMeaning.buttonStandardBackgroundColor};
      border-radius: 24px;

      > ${Text} {
        display: inline-flex;
      }

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colorsMeaning.buttonStandardColorTextFocus};
        background-color: ${({ theme }) => theme.colorsMeaning.buttonStandardBackgroundColorFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colorsMeaning.buttonStandardColorTextActive};
        background-color: ${({ theme }) => theme.colorsMeaning.buttonStandardBackgroundColorActive};
      }
    `}

  ${({ $secondary, $selected }) => {
    return (
      $secondary &&
      css`
        color: ${({ theme }) =>
          $selected
            ? theme.colorsMeaning.buttonStandardColorTextFocus
            : theme.colorsMeaning.buttonSecondaryColorText};
        background-color: ${({ theme }) =>
          $selected
            ? theme.colorsMeaning.buttonStandardBackgroundColorFocus
            : theme.colorsMeaning.buttonSecondaryBackgroundColor};
        border-radius: 24px;

        > ${Text} {
          display: inline-flex;
        }

        &:focus,
        &:hover {
          color: ${({ theme }) => theme.colorsMeaning.buttonStandardColorTextFocus};
          background-color: ${({ theme }) =>
            theme.colorsMeaning.buttonStandardBackgroundColorFocus};
        }

        &:active {
          color: ${({ theme }) => theme.colorsMeaning.buttonStandardColorTextActive};
          background-color: ${({ theme }) =>
            theme.colorsMeaning.buttonStandardBackgroundColorActive};
        }
      `
    );
  }}

  ${({ $link }) =>
    $link &&
    css`
      color: ${({ theme }) => theme.colorsMeaning.buttonLinkColorText};

      > ${Text} {
        display: inline-flex;
      }

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colorsMeaning.buttonLinkColorTextFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colorsMeaning.buttonLinkColorTextActive};
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

  ${({ $medium }) =>
    $medium &&
    css`
      padding: 7px 20px;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
    `}

  ${({ $large }) =>
    $large &&
    css`
      padding: 13px 20px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    `}

  ${StyledCounter} > & {
    width: 20px;
    height: 20px;
    padding: 6px;
  }
`;

export const Text = styled.span``;
