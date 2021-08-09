import styled from 'styled-components/macro';

export const StyledRadioGroupField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 0;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.fontColorText};
  cursor: pointer;
  display: flex;
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  padding: 10px 0;
  text-align: center;
  transition: color 0.35s;
  width: 100%;

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
