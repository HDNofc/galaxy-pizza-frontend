import styled from 'styled-components/macro';
import { StyledPizzaBlock } from '../pizza-block/styles';

interface IStyledPizzaSection {}

export const StyledPizzaSection = styled.section<IStyledPizzaSection>`
  display: grid;
  /* flex-direction: column; */
  /*
  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  } */

  /* > ${StyledPizzaBlock} {
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  } */
`;
