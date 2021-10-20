import { render } from '@testing-library/react';
import Star from './star';

describe('<Star>', () => {
  it('отображает корректные svg в зависимости от переданного пропса `type`', () => {
    const { container, rerender } = render(<Star />);
    expect(container.firstChild).toMatchSnapshot();

    rerender(<Star type="full" />);
    expect(container.firstChild).toMatchSnapshot();

    rerender(<Star type="half" />);
    expect(container.firstChild).toMatchSnapshot();

    rerender(<Star type="zero" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
