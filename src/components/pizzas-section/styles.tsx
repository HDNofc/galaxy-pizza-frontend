import styled from 'styled-components/macro';

export const StyledPizzaSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;

  @media ${(props) => props.theme.media.tabletLandscape} {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 680px;
  }

  @media ${(props) => props.theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    max-width: 900px;
  }
`;
