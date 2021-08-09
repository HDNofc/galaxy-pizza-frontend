import styled from 'styled-components/macro';

export const StyledRadioGroup = styled.div`
  border-radius: 100px;
  border: 1px solid #ededed;
  display: inline-flex;
  position: relative;
  width: 100%;
`;

export const RadioGroupBox = styled.div`
  background-color: #ededed;
  border-radius: 100px;
  height: 100%;
  left: 0;
  position: absolute;
  transition: left 0.2s ease-in-out;
  z-index: 0;
`;
