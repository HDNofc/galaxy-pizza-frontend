import styled from 'styled-components/macro';

import Button from 'components/button';
import { Button as StyledButton } from 'components/button/button.styles';

export const OrderLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding: 0 12px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }
`;

export const OrderLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 12px 0;
  background-color: ${({ theme }) => theme.colorsPalette.white};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(34 60 80 / 10%);

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin: 20px 0;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 18px;
  text-align: center;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    font-size: 20px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const CartTotalCount = styled.span`
  color: #a69895;
  font-size: 18px;
  font-style: normal;
  line-height: 18px;
`;

export const ClearCartButton = styled.button`
  font-size: 12px;
  line-height: 12px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    font-size: 13px;
    line-height: 13px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 15px;
    line-height: 15px;
  }
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colorsMeaning.bodyColor};
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CartImage = styled.img`
  margin: 12px 0 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }

  @media ${({ theme }) => theme.media.tabletLandscape} {
    padding: 0 30px;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 12px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }

  @media ${({ theme }) => theme.media.tabletLandscape} {
    padding: 0 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  padding: 20px;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    padding: 30px;
  }
`;

export const TotalPriceText = styled.span`
  margin-right: 20px;
  margin-left: auto;
  color: ${({ theme }) => theme.colorsMeaning.titleColor};
  font-weight: 500;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 14px;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    font-size: 16px;
    line-height: 16px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const PriceWrapper = styled.div`
  margin-left: auto;
`;

export const TotalPrice = styled.span`
  color: ${({ theme }) => theme.colorsMeaning.titleColor};
  font-weight: 500;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 18px;

  @media ${({ theme }) => theme.media.tabletLandscape} {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const OrderButton = styled(Button)`
  min-width: 200px;
`;

export const GoMainMenuButton = styled(StyledButton)`
  min-width: 200px;

  margin-bottom: 12px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-bottom: 0;
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-top: 30px;
  }
`;
