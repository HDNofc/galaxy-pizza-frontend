import { useRef } from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import * as S from './promo-carousel.styles';

interface Props {
  items: {
    id: string;
    jpg: {
      x1: string;
      x2: string;
    };
    webp: {
      x1: string;
      x2: string;
    };
    alt?: string;
  }[];
}

SwiperCore.use([Autoplay, Pagination]);

const PromoCarousel = ({ items }: Props): React.ReactElement => {
  const paginationRef = useRef<HTMLUListElement>(null);

  return (
    <S.PromoCarousel>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        loopedSlides={3}
        loop
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.pagination !== 'boolean' &&
            swiper.params.pagination !== undefined
          ) {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.update();
          }
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          modifierClass: 'promo-carousel-pagination-',
          bulletClass: 'promo-carousel-pagination-item',
          bulletActiveClass: 'promo-carousel-pagination-item-current',
          renderBullet: (index, className) => `<li class=${className}>
            <a class="promo-carousel-pagination-item-link" href="#${items[index].id}">
              <span class="promo-carousel-pagination-item-text">Перейти к слайду ${index + 1}</span>
            </a>
          </li>`,
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1020: {
            slidesPerView: 'auto',
          },
        }}
      >
        {items.map((slide) => (
          <SwiperSlide key={slide.id}>
            <S.SlideContainer>
              <S.Picture>
                <source type="image/webp" srcSet={`${slide.webp.x1} 1x, ${slide.webp.x2} 2x`} />
                <S.SlideImage src={slide.jpg.x1} srcSet={`${slide.jpg.x2} 2x`} alt={slide.alt} />
              </S.Picture>
            </S.SlideContainer>
          </SwiperSlide>
        ))}
        <ul ref={paginationRef} />
      </Swiper>
    </S.PromoCarousel>
  );
};

export default PromoCarousel;
