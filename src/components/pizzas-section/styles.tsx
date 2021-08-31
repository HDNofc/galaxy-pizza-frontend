import styled from 'styled-components/macro';

export const PizzaSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  width: 100%;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 680px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    max-width: 900px;
  }
`;
