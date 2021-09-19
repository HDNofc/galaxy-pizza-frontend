import styled from 'styled-components/macro';
import Link from 'components/link';

export const Footer = styled.div`
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
  flex-direction: column;
  width: 100%;
  max-width: 1240px;
  padding: 12px 0;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    flex-direction: row;
  }
`;

export const ContactLink = styled(Link)``;

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-left: auto;
  }

  > ${ContactLink} {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    align-items: flex-start;
    margin-top: 0;
    margin-left: auto;
  }
`;

export const Copyright = styled.span`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colorsPalette.white};

  @media ${({ theme }) => theme.media.tabletPortrait} {
    margin-bottom: 0;
  }
`;
