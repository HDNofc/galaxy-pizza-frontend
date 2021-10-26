import userEvent from '@testing-library/user-event';
import { PizzaCartItem } from 'redux/cart/contracts/state';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import CartList from './cart-list';
import { items } from './__mocks__/';

const defaultProps = {
  items: items as PizzaCartItem[],
  onDeleteItemClick: () => {},
  onCounterPlusClick: () => {},
  onCounterMinusClick: () => {},
};

describe('<CartList>', () => {
  it('отображается корректно с верным количеством элементов', () => {
    const { container } = renderWithThemeProvider(<CartList {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelectorAll('li')).toHaveLength(3);
  });

  it('коллбеки вызываются корректно', () => {
    const onDeleteItemClick = jest.fn();
    const onCounterPlusClick = jest.fn();
    const onCounterMinusClick = jest.fn();

    const { container } = renderWithThemeProvider(
      <CartList
        {...defaultProps}
        onDeleteItemClick={onDeleteItemClick}
        onCounterPlusClick={onCounterPlusClick}
        onCounterMinusClick={onCounterMinusClick}
      />
    );

    const firstPizza = container.querySelectorAll('li')[0];
    const deleteFirstPizzaButton = firstPizza.querySelectorAll('button')[0];
    const decrementFirstPizzaButton = firstPizza.querySelectorAll('button')[1];
    const incrementFirstPizzaButton = firstPizza.querySelectorAll('button')[2];

    userEvent.click(deleteFirstPizzaButton);
    expect(onDeleteItemClick).toHaveBeenCalled();

    userEvent.click(decrementFirstPizzaButton);
    expect(onCounterMinusClick).toHaveBeenCalled();

    userEvent.click(incrementFirstPizzaButton);
    expect(onCounterPlusClick).toHaveBeenCalled();
  });
});
