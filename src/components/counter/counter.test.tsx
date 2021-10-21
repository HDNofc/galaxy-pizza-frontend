import userEvent from '@testing-library/user-event';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import Counter from './counter';

describe('<Counter>', () => {
  it('отображается корректно', () => {
    const defaultProps = {
      onMinusClick: () => {},
      onPlusClick: () => {},
    };

    const { container } = renderWithThemeProvider(<Counter {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('отображается корректно с переданным пропсом `count`', () => {
    const defaultProps = {
      onMinusClick: () => {},
      onPlusClick: () => {},
      count: 5,
    };

    const { container } = renderWithThemeProvider(<Counter {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('коллбеки вызываются корректно', () => {
    const onDecrement = jest.fn();
    const onIncrement = jest.fn();

    const { getByText } = renderWithThemeProvider(
      <Counter onMinusClick={onDecrement} onPlusClick={onIncrement} />
    );

    userEvent.click(getByText(/Добавить пиццу/i));
    expect(onIncrement).toHaveBeenCalled();

    userEvent.click(getByText(/Отнять пиццу/i));
    expect(onDecrement).toHaveBeenCalled();
  });
});
