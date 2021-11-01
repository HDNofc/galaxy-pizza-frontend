import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import PromoCarousel from './promo-carousel';

const items = [
  {
    id: 'id-1',
    jpg: {
      x1: 'image-url-jpg-1x',
      x2: 'image-url-jpg-2x',
    },
    webp: {
      x1: 'image-url-webp-1x',
      x2: 'image-url-webp-1x',
    },
    alt: 'alt-1',
  },
  {
    id: 'id-2',
    jpg: {
      x1: 'image-url-jpg-1x',
      x2: 'image-url-jpg-2x',
    },
    webp: {
      x1: 'image-url-webp-1x',
      x2: 'image-url-webp-1x',
    },
    alt: 'alt-2',
  },
  {
    id: 'id-3',
    jpg: {
      x1: 'image-url-jpg-1x',
      x2: 'image-url-jpg-2x',
    },
    webp: {
      x1: 'image-url-webp-1x',
      x2: 'image-url-webp-1x',
    },
    alt: 'alt-3',
  },
];

describe('<PromoCarousel>', () => {
  const defaultProps = {
    items: items,
  };

  it('отображается корректно с верным количество элементов', () => {
    const { container } = renderWithThemeProvider(<PromoCarousel {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
