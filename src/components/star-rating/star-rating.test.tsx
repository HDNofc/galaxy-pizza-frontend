import { render } from '@testing-library/react';
import StarRating from './star-rating';

describe('<StarRating>', () => {
  it('отображает корректные количество звезд в зависимости от пропса `starAmount`', () => {
    const { container, rerender } = render(<StarRating rating={5} />);
    expect(container.firstChild).toMatchSnapshot();

    rerender(<StarRating starAmount={1} rating={5} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('отображает корректно в зависимости от пропса `rating`', () => {
    const { container, rerender } = render(<StarRating rating={5} />);
    expect(container.firstChild).toMatchSnapshot();

    rerender(<StarRating rating={3.8} />);
    expect(container.firstChild).toMatchSnapshot();

    rerender(<StarRating rating={3.3} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
