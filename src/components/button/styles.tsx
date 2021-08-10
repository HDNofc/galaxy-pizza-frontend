import styled, { css } from 'styled-components/macro';

interface IButtonProps {
  standard?: boolean;
}

export const StyledButton = styled.button<IButtonProps>`
  background: none;
  border-radius: 0;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  user-select: none;

  ${({ standard }) =>
    standard &&
    css`
      padding: 16px 20px;
      color: ${(props) => props.theme.colors.buttonColorTextDefault};
      background-color: ${(props) => props.theme.colors.buttonColorDefault};
      border-radius: 24px;

      > ${ButtonText} {
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
`;

export const ButtonText = styled.span``;
