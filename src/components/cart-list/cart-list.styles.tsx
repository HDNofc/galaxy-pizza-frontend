import styled, { css } from 'styled-components/macro';
import Button from 'components/button';

interface Props {
  $size?: 'small' | 'big';
}

interface PictureProps {
  $loaded?: boolean;
}

export const CartList = styled.ul<Props>`
  width: 100%;
  margin: 0;
  padding: 0;

  ${({ $size }) => $size === 'big' && getSizeBigStyles()};
`;

export const CartListItem = styled.li`
  padding: 16px 0;
  list-style: none;
  border-bottom: 1px solid #ededed;
`;

export const ItemBody = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Picture = styled.picture<PictureProps>`
  display: flex;
  margin: 6px 4px 0 0;
`;

export const ImagePlaceholder = styled.div`
  .pizza-placeholder-image {
    align-self: center;
    width: 50px;
    height: 38px;
    margin-right: 4px;
  }
`;

export const CartListImage = styled.img`
  width: 50px;
`;

export const ItemInfo = styled.div`
  margin-right: 4px;
`;

export const ItemName = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colorsMeaning.titleColor};
  font-weight: 700;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 12px;
`;

export const ItemShortDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colorsMeaning.bodyColor};
  font-size: 12px;
  line-height: 16px;
`;

export const ItemFullDescription = styled.p`
  display: none;
  margin: 40px 0 0;
  color: ${({ theme }) => theme.colorsMeaning.bodyColor};
  font-size: 14px;
  line-height: 22px;
`;

export const DeleteButton = styled(Button)`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin: 8px 0 0 auto;
  padding: 0;
  color: #bfb7b6;
  cursor: pointer;
  transition: color 0.2s;

  &:focus,
  &:hover {
    color: #c21313;
  }
`;

export const ItemSummaryPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
`;

export const ItemPrice = styled.span`
  color: ${({ theme }) => theme.colorsMeaning.titleColor};
  font-weight: 500;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 14px;
`;

// $size = 'big'
function getSizeBigStyles() {
  return css`
    ${ItemName} {
      @media ${({ theme }) => theme.media.tabletPortrait} {
        font-size: 16px;
        line-height: 20px;
      }

      @media ${({ theme }) => theme.media.desktop} {
        font-size: 18px;
        line-height: 24px;
      }
    }

    ${ItemInfo} {
      @media ${({ theme }) => theme.media.desktop} {
        align-self: center;
        margin-right: 50px;
      }
    }

    ${ImagePlaceholder} {
      .pizza-placeholder-image {
        @media ${({ theme }) => theme.media.tabletPortrait} {
          width: 70px;
          height: 50px;
        }

        @media ${({ theme }) => theme.media.tabletLandscape} {
          width: 120px;
          height: 81px;
          margin-right: 12px;
        }

        @media ${({ theme }) => theme.media.desktop} {
          width: 180px;
          height: 119px;
          margin-right: 20px;
        }
      }
    }

    ${Picture} {
      @media ${({ theme }) => theme.media.tabletLandscape} {
        margin-right: 12px;
      }

      @media ${({ theme }) => theme.media.desktop} {
        margin-right: 20px;
      }
    }

    ${CartListImage} {
      @media ${({ theme }) => theme.media.tabletPortrait} {
        width: 70px;
      }

      @media ${({ theme }) => theme.media.tabletLandscape} {
        width: 120px;
      }

      @media ${({ theme }) => theme.media.desktop} {
        width: 180px;
      }
    }

    ${CartListItem} {
      @media ${({ theme }) => theme.media.desktop} {
        padding: 20px 0;
      }
    }

    ${ItemSummaryPrice} {
      @media ${({ theme }) => theme.media.tabletLandscape} {
        padding-left: 18px;
      }

      @media ${({ theme }) => theme.media.desktop} {
        padding-left: 50px;
      }
    }

    ${ItemPrice} {
      @media ${({ theme }) => theme.media.tabletPortrait} {
        font-size: 16px;
        line-height: 16px;
      }

      @media ${({ theme }) => theme.media.desktop} {
        font-size: 18px;
        line-height: 18px;
      }
    }

    ${DeleteButton} {
      @media ${({ theme }) => theme.media.tabletLandscape} {
        width: 16px;
        height: 16px;
      }

      @media ${({ theme }) => theme.media.desktop} {
        font-size: 18px;
        line-height: 18px;
      }
    }

    ${ItemShortDescription} {
      @media ${({ theme }) => theme.media.desktop} {
        font-size: 14px;
        line-height: 20px;
      }
    }

    ${ItemFullDescription} {
      @media ${({ theme }) => theme.media.desktop} {
        display: block;
      }
    }
  `;
}
