import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import renderWithStore from 'test-utils/render-with-store';
import Cart from './cart';
import { cartState } from './__stubs__/';

const stateMock = { cart: cartState };

describe('<Cart>', () => {
  it('отображается корректно с верным количеством элементов', () => {
    const { container, getByText, getByRole } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(container.firstChild).toMatchSnapshot();

    expect(container.querySelectorAll('li')).toHaveLength(3);
    expect(getByRole('heading', { hidden: true })).toHaveTextContent(/(4)/i);
    expect(getByText(/3 774 ₽/i)).toBeInTheDocument();
  });

  it('отображается заглушка, если корзина пуста', () => {
    const { getByText } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(getByText(/Корзина пуста/i)).toBeInTheDocument();
  });

  it('корзина очищается при клике на кнопку', () => {
    const { getByText, getByRole } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(getByRole('heading', { hidden: true })).toHaveTextContent(/(4)/i);
    userEvent.click(getByText(/очистить/i));
    expect(getByText(/Корзина пуста/i)).toBeInTheDocument();
  });

  it('при увеличении/уменьшении количества заказываемых пицц изменяется сумма пицц в корзине', () => {
    const { container, getByRole } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(container.querySelectorAll('li')).toHaveLength(3);
    expect(getByRole('heading', { hidden: true })).toHaveTextContent(/(4)/i);

    const firstPizza = container.querySelectorAll('li')[0];
    const incrementFirstPizzaButton = firstPizza.querySelectorAll('button')[2];
    const decrementFirstPizzaButton = firstPizza.querySelectorAll('button')[1];

    userEvent.click(incrementFirstPizzaButton);
    expect(getByRole('heading', { hidden: true })).toHaveTextContent(/(5)/i);

    userEvent.click(decrementFirstPizzaButton);
    userEvent.click(decrementFirstPizzaButton);
    expect(getByRole('heading', { hidden: true })).toHaveTextContent(/(3)/i);
  });

  it('при увеличении/уменьшении количества заказываемых пицц изменяется сумма оплаты', () => {
    const { container, getByText } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(getByText(/3 774 ₽/i)).toBeInTheDocument();

    const firstPizza = container.querySelectorAll('li')[0];
    const incrementFirstPizzaButton = firstPizza.querySelectorAll('button')[2];
    const decrementFirstPizzaButton = firstPizza.querySelectorAll('button')[1];

    userEvent.click(incrementFirstPizzaButton);
    expect(getByText(/4 942 ₽/i)).toBeInTheDocument();

    userEvent.click(decrementFirstPizzaButton);
    userEvent.click(decrementFirstPizzaButton);
    expect(getByText(/2 606 ₽/i)).toBeInTheDocument();
  });

  it('увеличение/уменьшение количества конкретной пиццы происходит корректно', () => {
    const { container } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(container.querySelectorAll('li')).toHaveLength(3);

    const firstPizza = container.querySelectorAll('li')[0];
    const incrementFirstPizzaButton = firstPizza.querySelectorAll('button')[2];
    const decrementFirstPizzaButton = firstPizza.querySelectorAll('button')[1];

    expect(within(firstPizza).getByText('2')).toBeInTheDocument();
    userEvent.click(incrementFirstPizzaButton);
    expect(within(firstPizza).queryByText('2')).not.toBeInTheDocument();
    expect(within(firstPizza).getByText('3')).toBeInTheDocument();

    userEvent.click(decrementFirstPizzaButton);
    userEvent.click(decrementFirstPizzaButton);
    expect(within(firstPizza).queryByText('3')).not.toBeInTheDocument();
    expect(within(firstPizza).getByText('1')).toBeInTheDocument();
  });

  it('при уменьшении количества конкретной пиццы ниже 1 происходит ее удаление', () => {
    const { container } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(container.querySelectorAll('li')).toHaveLength(3);

    const firstPizza = container.querySelectorAll('li')[0];
    const decrementFirstPizzaButton = firstPizza.querySelectorAll('button')[1];

    expect(within(firstPizza).getByText('2')).toBeInTheDocument();
    userEvent.click(decrementFirstPizzaButton);
    userEvent.click(decrementFirstPizzaButton);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });

  it('удаление конкретной пиццы происходит корректно', () => {
    const { container } = renderWithStore(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { state: stateMock }
    );

    expect(container.querySelectorAll('li')).toHaveLength(3);

    const firstPizza = container.querySelectorAll('li')[0];
    const removePizzaButton = within(firstPizza).getByText(/Удалить пиццу из корзины/i);

    userEvent.click(removePizzaButton);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
