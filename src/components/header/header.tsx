import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { throttle } from 'lodash';

import * as S from './styles';
import Link from 'components/link';
import StarRating from 'components/star-rating';

import { LinkProps } from 'components/link';

import variables from 'styles/variables';

interface Props {
  links: {
    id: string | number;
    to: LinkProps['to'];
    text: React.ReactNode;
  }[];
}

const Header = ({ links }: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const detectMobileWidth = () => {
    const isMobileDetected = !window.matchMedia(`(min-width: ${variables.common.desktop})`).matches;
    setIsMobile(isMobileDetected);
  };

  const detectMobileWidthThrottled = throttle(detectMobileWidth, 300, {
    leading: true,
    trailing: true,
  });

  useEffect(() => {
    detectMobileWidth();
    window.addEventListener('resize', detectMobileWidthThrottled);
    return () => {
      window.removeEventListener('resize', detectMobileWidthThrottled);
    };
  }, [detectMobileWidthThrottled]);

  const onBurgerClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden'; // TODO Использовать BSL https://www.npmjs.com/package/body-scroll-lock
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isMobile]);

  const location = useLocation();

  const onMenuItemClick = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <S.Header>
        <S.Content>
          <S.Logotype {...(location.pathname !== '/' && { to: '/' })} />
          <S.Hamburger active={isMenuOpen} onClick={onBurgerClick} />
          <S.HeaderMenu $isOpen={isMenuOpen}>
            <S.Navigation>
              <S.List>
                {links.map(({ id, to, text }) => (
                  <S.ListItem key={id}>
                    <Link
                      onClick={onMenuItemClick}
                      to={to}
                      {...(isMobile ? { light: true } : { standard: true })}
                    >
                      {text}
                    </Link>
                  </S.ListItem>
                ))}
              </S.List>
            </S.Navigation>

            <S.Rating>
              <S.RatingText>4.2</S.RatingText>
              <StarRating
                rating={4.2}
                {...(isMobile ? { starAmount: 5 } : { starAmount: 1, size: 18 })}
              />
            </S.Rating>

            <S.PhoneLinkWrapper>
              <S.PhoneIcon />
              <S.PhoneLink
                to="/"
                href="tel:+78009999999"
                {...(isMobile ? { light: true } : { standard: true })}
              >
                8 (800) 999-99-99
              </S.PhoneLink>
            </S.PhoneLinkWrapper>
          </S.HeaderMenu>
        </S.Content>
      </S.Header>
    </>
  );
};

export default Header;
