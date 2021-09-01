import styled, { css } from 'styled-components/macro';

import { Logo } from 'components/logo/styles';
import Link from 'components/link';
import _Hamburger from 'components/hamburger';
import _Logo from 'components/logo';
import { ReactComponent as _PhoneIcon } from './icons/phone-icon.svg';

import variables from 'styles/variables';

interface HeaderMenuProps {
  $isOpen: boolean;
}

export const Header = styled.header`
  position: relative;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  min-height: ${variables.common.headerHeightMobile};
  padding: 0 8px;
  background-color: #fff;
  border-bottom: 1px solid #d6d6d6;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  > ${Logo} {
    margin-right: auto;
  }
`;

export const Logotype = styled(_Logo)`
  margin-right: auto;
`;

export const HeaderMenu = styled.div<HeaderMenuProps>`
  position: absolute;
  top: ${variables.common.headerHeightMobile};
  left: 0;
  z-index: 10;
  display: none;
  width: 100vw;
  height: calc(100vh - ${variables.common.headerHeightMobile});
  margin-left: auto;
  padding: 20px 10px 20px 30px;
  background-color: #28307b;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    padding: 30px 10px 30px 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    position: static;
    display: flex;
    width: 100%;
    height: auto;
    margin-left: 80px;
    padding: 0;
    background-color: #fff;
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
  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
  padding: 0;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-bottom: 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 26px;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 16px;

    @media ${({ theme }) => theme.media.tabletPortrait} {
      margin-bottom: 24px;
    }

    @media ${({ theme }) => theme.media.desktop} {
      margin-right: 16px;
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
  align-items: baseline;
  margin-bottom: 80px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-right: 12px;
    margin-bottom: 0;
  }
`;

export const RatingText = styled.span`
  margin-right: 8px;
  color: #fc0;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 26px;

  @media ${({ theme }) => theme.media.desktop} {
    margin-right: 4px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Note = styled.p`
  margin: 0;
  margin: auto 0 0 auto;
  padding: 0;
  color: ${({ theme }) => theme.colors.linkColorTextReverse};
  font-size: 12px;
  line-height: 16px;
`;

export const Sup = styled.sup`
  color: ${({ theme }) => theme.colors.linkColorTextReverse};
`;

export const PhoneLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PhoneIcon = styled(_PhoneIcon)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.linkColorTextReverse};

  @media ${({ theme }) => theme.media.desktop} {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    color: #000;
  }
`;

export const PhoneLink = styled(Link)`
  @media ${({ theme }) => theme.media.tabletPortrait} {
    font-size: 20px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const Hamburger = styled(_Hamburger)`
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;
