import styled from 'styled-components/macro';

export const StyledRadioGroup = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  border: 1px solid #ededed;
  border-radius: 100px;
`;

export const RadioGroupBox = styled.div`
  position: absolute;
  left: 0;
  z-index: 0;
  height: 100%;
  background-color: #ededed;
  border-radius: 100px;
  transition: left 0.2s ease-in-out;
`;
