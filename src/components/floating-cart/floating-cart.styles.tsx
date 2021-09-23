import styled from 'styled-components/macro';
import Link from 'components/link';

export const Text = styled.span``;

export const FloatingCart = styled(Link)`
  display: flex;
  padding: 13px 20px;
  color: white;
  color: ${({ theme }) => theme.colorsMeaning.buttonStandardColorText};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  background-color: ${({ theme }) => theme.colorsPalette.orangeWeb};
  border-radius: 24px;
  box-shadow: 0 0 10px 0 rgb(34 60 80 / 0.1);

  > ${Text} {
    margin-left: 4px;
  }

  &:active {
    background-color: ${({ theme }) => theme.colorsPalette.yellowOrange};
  }
`;
