import { StyledCart } from 'components/cart/styles';
import { StyledPizzaSection } from 'components/pizzas-section/styles';
import styled from 'styled-components/macro';

export const StyledMainLayout = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 8px;
  background-color: #f8f8f8;

  @media ${(props) => props.theme.media.tabletPortrait} {
    padding: 0 20px;
  }

  > ${StyledCart} {
    position: sticky;
    top: 0;
    flex-shrink: 0;
  }

  > ${StyledPizzaSection} {
    @media ${(props) => props.theme.media.tabletPortrait} {
      margin-right: 30px;
    }
  }
`;
