import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

import * as S from './styles';

interface Props {
  items: {
    id: string;
    to: string;
    text: string;
  }[];
}

const Filter = ({ items }: Props): React.ReactElement => {
  const params = useParams<{ taste?: string }>();

  return (
    <S.Filter>
      <Swiper
        spaceBetween={8}
        slidesPerView="auto"
        resistance
        resistanceRatio={0}
        freeMode
        freeModeMomentumBounce={false}
        watchOverflow
        onClick={(swiper) => {
          swiper.slideTo(swiper.clickedIndex);
        }}
      >
        {items.map(({ id, to, text }) => {
          return (
            <SwiperSlide key={id} style={{ width: 'auto' }}>
              <S.FilterItemLink
                as={Link}
                to={to}
                $medium
                $secondary
                {...(params.taste === to.split('/')[2] ? { $selected: true } : {})}
              >
                {text}
              </S.FilterItemLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Filter>
  );
};

export default Filter;
