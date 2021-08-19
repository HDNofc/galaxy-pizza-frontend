import styled from 'styled-components/macro';

export const StyledCounter = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 80px;
`;

export const Value = styled.span`
  color: ${(props) => props.theme.colors.fontColorText};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  opacity: 0.8;
  text-align: center;
`;
