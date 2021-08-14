import styled from 'styled-components/macro';
import { StyledPizzaBlock } from '../pizza-block/styles';

interface IStyledPizzaLayout {}

export const StyledPizzaLayout = styled.section<IStyledPizzaLayout>`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  }

  > ${StyledPizzaBlock} {
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
`;
