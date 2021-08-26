import { Cart as StyledCart } from 'components/cart/styles';
import { PizzaSection as StyledPizzaSection } from 'components/pizzas-section/styles';
import styled from 'styled-components/macro';

export const MainLayout = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 8px;
  background-color: #f8f8f8;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }

  > ${StyledCart} {
    position: sticky;
    top: 0;
    flex-shrink: 0;
  }

  > ${StyledPizzaSection} {
    @media ${({ theme }) => theme.media.tabletPortrait} {
      margin-right: 30px;
    }
  }
`;
