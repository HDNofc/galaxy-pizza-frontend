import styled from 'styled-components/macro';

export const PromoCarousel = styled.div`
  width: 100%;

  .swiper-slide {
    @media ${({ theme }) => theme.media.tabletPortrait} {
      width: 50%;
      opacity: 0.5;
      transition: opacity 0.35s;
    }
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .promo-carousel-pagination-bullets {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
  }

  .promo-carousel-pagination-item-link {
    display: block;
    padding: 4px;
    text-decoration: none;
    outline: none;

    &::before {
      display: block;
      box-sizing: border-box;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colorsPalette.platinum};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colorsPalette.platinum};
      border-radius: 50%;
      transition: background-color 0.2s, border-color 0.2s;
      content: '';
    }

    &:hover,
    &:focus {
      &::before {
        background-color: ${({ theme }) => theme.colorsPalette.royalBlueDark};
        border-color: ${({ theme }) => theme.colorsPalette.royalBlueDark};
      }
    }
  }

  .promo-carousel-pagination-item-current {
    .promo-carousel-pagination-item-link {
      &::before {
        background-color: ${({ theme }) => theme.colorsPalette.royalBlueDark};
        border-color: ${({ theme }) => theme.colorsPalette.royalBlueDark};
      }
    }
  }

  .promo-carousel-pagination-item-text {
    ${({ theme }) => theme.mixins.visuallyHidden}
  }
`;

export const SlideContainer = styled.div``;

export const SlideImage = styled.img`
  max-height: 350px;
  object-fit: cover;

  @media ${({ theme }) => theme.media.desktop} {
    max-height: 400px;
  }
`;

export const Picture = styled.picture``;
