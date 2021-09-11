import styled, { css } from 'styled-components/macro';

const navHeight = 52;

interface FilterProps {
  $withShadow?: boolean;
}

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Promo = styled.div`
  width: 100%;
  margin: 12px 0;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    margin: 20px 0;
  }
`;

export const Filter = styled.nav<FilterProps>`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: ${navHeight}px;
  margin-bottom: 12px;
  transition: box-shadow 0.2s ease-in-out;

  ${({ $withShadow }) =>
    $withShadow &&
    css`
      background-color: ${({ theme }) => theme.colorsPalette.white};
      box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
    `};

  @media ${({ theme }) => theme.media.tabletLandscape} {
    margin-bottom: 20px;
  }
`;

export const FilterContent = styled.div`
  padding: 8px 0;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 1020px;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const PizzasContent = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 12px;
  background-color: #f8f8f8;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }

  @media ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 1020px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 1280px;
  }
`;

export const Cart = styled.aside`
  position: sticky;
  top: ${navHeight + 12}px;
  flex-shrink: 0;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    top: ${navHeight + 20}px;
  }
`;

export const PizzasSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  width: 100%;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-right: 30px;
  }

  @media ${({ theme }) => theme.media.tabletLandscape} {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
`;
