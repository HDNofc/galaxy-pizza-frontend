import styled, { css } from 'styled-components/macro';

import { Logo } from 'components/logo/styles';
import Link from 'components/link';
import _Hamburger from 'components/hamburger';
import _Logo from 'components/logo';

import GeoLocationSelector from 'components/geo-location-selector';

interface HeaderMenuProps {
  $isOpen?: boolean;
}

interface ListItemProps {
  $icon?: string;
}

interface ContactLinkProps {
  $icon?: string;
}

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.common.headerHeightMobile};
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colorsPalette.oxfordBlue};

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    min-height: ${({ theme }) => theme.common.headerHeightDesktop};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1240px;

  > ${Logo} {
    margin-right: auto;
  }
`;

export const Logotype = styled(_Logo)`
  margin-right: auto;
`;

export const HeaderMenu = styled.div<HeaderMenuProps>`
  position: absolute;
  top: ${({ theme }) => theme.common.headerHeightMobile};
  left: 0;
  z-index: 10;
  display: none;
  width: 100vw;
  height: ${({ theme }) => `calc(100vh - ${theme.common.headerHeightMobile}) `};
  margin-left: auto;
  padding: 20px 10px 20px 12px;
  background-color: ${({ theme }) => theme.colorsPalette.royalBlueDark};

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 30px 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    position: static;
    display: flex;
    width: 100%;
    height: auto;
    margin-left: 80px;
    padding: 0;
    background-color: ${({ theme }) => theme.colorsPalette.oxfordBlue};
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: flex;
      flex-direction: column;

      @media ${({ theme }) => theme.media.desktop} {
        display: flex;
        flex-direction: row;
      }
    `};
`;

export const Navigation = styled.nav`
  padding-left: 34px;

  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    margin-right: auto;
    padding-left: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  position: relative;
  font-weight: 700;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 24px;
  list-style: none;

  ${({ $icon }) =>
    $icon &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: -34px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background-image: url('${$icon}');
        transform: translateY(-50%);
        content: '';

        @media ${({ theme }) => theme.media.desktop} {
          display: none;
        }
      }
    `};

  &:not(:last-child) {
    margin-bottom: 16px;

    @media ${({ theme }) => theme.media.desktop} {
      margin-right: 24px;
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.desktop} {
    margin-left: auto;
  }
`;

export const DeliveryTime = styled.span`
  margin-right: 8px;
  margin-left: 34px;
  color: ${({ theme }) => theme.colorsMeaning.linkAlternativeColorText};
  font-weight: 700;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 14px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-left: 0;
  }
`;

export const RatingValue = styled.span`
  margin-right: 8px;
  color: #fadb14;
  font-weight: 700;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 14px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-right: 4px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const ContactLink = styled(Link)<ContactLinkProps>`
  position: relative;
  padding-left: 34px;
  font-weight: 700;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 24px;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
    line-height: 20px;
  }

  ${({ $icon }) =>
    $icon &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background-image: url('${$icon}');
        transform: translateY(-50%);
        content: '';

        @media ${({ theme }) => theme.media.desktop} {
          display: none;
        }
      }
    `};
`;

export const Hamburger = styled(_Hamburger)`
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const PlanetLocation = styled(GeoLocationSelector)`
  margin-bottom: 4px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

export const HeaderMenuHeader = styled.div`
  margin-bottom: 30px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-bottom: 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    min-width: 270px;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

export const HeaderMenuBody = styled.div`
  margin-bottom: 30px;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-bottom: 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const HeaderMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  > ${ContactLink} {
    &:not(:last-child) {
      margin-bottom: 16px;

      @media ${({ theme }) => theme.media.desktop} {
        margin-bottom: 8px;
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    align-items: flex-start;
    margin-top: 0;
    margin-left: auto;
  }
`;
