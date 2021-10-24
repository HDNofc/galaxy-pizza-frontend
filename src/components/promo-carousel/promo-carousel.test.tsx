import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import PromoCarousel from './promo-carousel';

const stubs = [
  {
    id: 'id-1',
    src: 'image-url-1',
    alt: 'alt-1',
  },
  {
    id: 'id-2',
    src: 'image-url-2',
    alt: 'alt-2',
  },
  {
    id: 'id-3',
    src: 'image-url-3',
    alt: 'alt-3',
  },
];

describe('<PromoCarousel>', () => {
  const defaultProps = {
    items: stubs,
  };

  it('отображается корректно с верным количество элементов', () => {
    const { container } = renderWithThemeProvider(<PromoCarousel {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
