import styled from 'styled-components/macro';

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 80px;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colorsMeaning.bodyColor};
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  opacity: 0.8;
`;
