import styled, { css } from 'styled-components/macro';

interface LabelProps {
  $selected?: boolean;
}

export const RadioGroupField = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  display: flex;
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  color: ${({ theme }) => theme.colorsMeaning.radioButtonStandardColorText};
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  cursor: ${({ $selected }) => ($selected ? 'default' : 'pointer')};
  transition: color 0.2s;

  ${({ $selected }) =>
    !$selected &&
    css`
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colorsMeaning.radioButtonStandardColorTextFocus};
      }

      &:active {
        color: ${({ theme }) => theme.colorsMeaning.radioButtonStandardColorTextActive};
      }
    `};
`;

export const Input = styled.input`
  ${({ theme }) => theme.mixins.visuallyHidden};

  &:focus + ${Label} {
    color: ${({ theme }) => theme.colorsMeaning.radioButtonStandardColorTextFocus};
  }
`;
