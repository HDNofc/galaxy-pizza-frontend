import styled from 'styled-components/macro';

export const RadioGroupField = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  cursor: pointer;
  transition: color 0.35s;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.radioColorTextFocus};
  }
`;

export const Input = styled.input`
  ${(props) => props.theme.mixins.visuallyHidden}

  &:focus + ${Label} {
    color: ${(props) => props.theme.colors.radioColorTextFocus};
  }
`;
