import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { throttle } from 'lodash';

import { Dispatch } from 'redux';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { setPlanetLocation } from 'redux/planet-location/action';

import * as S from './header.styles';
import variables from 'styles/variables';
import Link from 'components/link';
import StarRating from 'components/star-rating';
import { LinkProps } from 'components/link';
import planetsDeliveryRating, { IPlanetsDeliveryRating } from 'constants/planets-delivery-rating';

import pluralize from 'helpers/pluralize';

import phoneIcon from './icons/phone-icon.svg';
import mailIcon from './icons/mail-icon.svg';

interface Props {
  links: {
    icon?: string | undefined;
    id: string | number;
    to: LinkProps['to'];
    text: React.ReactNode;
  }[];
}

const Header = ({ links }: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  const dispatch: Dispatch<any> = useAppDispatch();
  const planetLocation = useAppSelector(
    ({ planetLocation }: RootState) => planetLocation.planetLocation
  );

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
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden'; // TODO Использовать BSL https://www.npmjs.com/package/body-scroll-lock
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isMobile]);

  const onMenuItemClick = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    }
    window.scrollTo(0, 0);
  };

  const getPlanetLocationSelectorItems = (planets: IPlanetsDeliveryRating) => {
    return Object.entries(planets).map(([planetName, planetInfo]) => ({
      value: planetName,
      label: planetInfo.name,
    }));
  };

  const getDeliveryTime = (time: number) => {
    if (time > 60) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;

      return `${hours} ${pluralize(hours, 'час', 'часа', 'часов')} ${minutes} ${pluralize(
        minutes,
        'минута',
        'минуты',
        'минут'
      )}`;
    }

    return `${time} ${pluralize(time, 'минута', 'минуты', 'минут')}`;
  };

  const onChangePlanetLocation = (selectedLocation: string) => {
    dispatch(setPlanetLocation(selectedLocation));
  };

  return (
    <S.Header>
      <S.Content>
        <S.Logotype {...(location.pathname !== '/' && { to: '/' })} />
        <S.Hamburger active={isMenuOpen} onClick={onBurgerClick} />
        <S.HeaderMenu $isOpen={isMenuOpen}>
          <S.HeaderMenuHeader>
            <S.PlanetLocation
              onChange={onChangePlanetLocation}
              items={getPlanetLocationSelectorItems(planetsDeliveryRating)}
              defaultValue={
                getPlanetLocationSelectorItems({
                  [planetLocation]: planetsDeliveryRating[planetLocation],
                })[0]
              }
            />
            <S.Rating>
              <S.DeliveryTime>
                {getDeliveryTime(planetsDeliveryRating[planetLocation].time)}
              </S.DeliveryTime>
              <S.RatingValue>{planetsDeliveryRating[planetLocation].deliveryRating}</S.RatingValue>
              <StarRating
                rating={planetsDeliveryRating[planetLocation].deliveryRating}
                starAmount={isMobile ? 5 : 1}
              />
            </S.Rating>
          </S.HeaderMenuHeader>

          <S.HeaderMenuBody>
            <S.Navigation>
              <S.List>
                {links.map(({ id, to, text, icon }) => {
                  return (
                    <S.ListItem key={id} $icon={icon ? icon : ''}>
                      <Link
                        onClick={onMenuItemClick}
                        to={to}
                        alternative
                        {...(location.pathname === to && { $selected: true })}
                      >
                        {text}
                      </Link>
                    </S.ListItem>
                  );
                })}
              </S.List>
            </S.Navigation>
          </S.HeaderMenuBody>

          <S.HeaderMenuFooter>
            <S.ContactLink href="tel:+78009999999" alternative $icon={phoneIcon}>
              8 (800) 999-99-99
            </S.ContactLink>

            <S.ContactLink href="mailto:mail@example.com" alternative $icon={mailIcon}>
              mail@example.com
            </S.ContactLink>
          </S.HeaderMenuFooter>
        </S.HeaderMenu>
      </S.Content>
    </S.Header>
  );
};

export default Header;
