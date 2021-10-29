import userEvent from '@testing-library/user-event';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import PizzaBlock from './pizza-block';
import { pizza } from './__mocks__';

describe('<PizzaBlock>', () => {
  it('отображается корректно', () => {
    const { container, getAllByRole, getByRole, getByText, getByLabelText } =
      renderWithThemeProvider(<PizzaBlock {...pizza} />);

    expect(getByText(/Цыпленок Флорентина/i)).toBeInTheDocument();
    expect(getByText(/Сливочно-шпинатный соус/i)).toBeInTheDocument();

    expect(getAllByRole('img', { hidden: true })[0]).toHaveAttribute('src', 'test-image-url.jpg');
    expect(container.querySelector('source')).toHaveAttribute('srcset', 'test-image-url.webp');

    expect(getByText(/23/i)).toBeInTheDocument();
    expect(getByText(/30/i)).toBeInTheDocument();
    expect(getByLabelText('30')).toBeChecked();
    expect(getByText(/35/i)).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();

    expect(getByText(/629 ₽/i)).toBeInTheDocument();
    expect(getByRole('textbox', { hidden: true })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('пропсы `hot`, `vegan` передаются корректно', () => {
    const { getByText } = renderWithThemeProvider(<PizzaBlock {...pizza} hot vegan />);

    expect(getByText(/hot.svg/i)).toBeInTheDocument();
    expect(getByText(/vegan.svg/i)).toBeInTheDocument();
  });

  it('коллбек `onDoughTypeChange` передается корректно', () => {
    const onDoughTypeChange = jest.fn();
    const { getByLabelText } = renderWithThemeProvider(
      <PizzaBlock {...pizza} onDoughTypeChange={onDoughTypeChange} />
    );

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText(/тонкое/i)).not.toBeChecked();

    userEvent.click(getByLabelText(/тонкое/i));
    expect(onDoughTypeChange).toHaveBeenCalledWith({
      id: 'dough-slim',
      value: 'slim',
      checked: true,
    });
  });

  it('коллбек `onDoughTypeChange` передается корректно', () => {
    const onDoughTypeChange = jest.fn();
    const { getByLabelText } = renderWithThemeProvider(
      <PizzaBlock {...pizza} onDoughTypeChange={onDoughTypeChange} />
    );

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText(/тонкое/i)).not.toBeChecked();

    userEvent.click(getByLabelText(/тонкое/i));
    expect(onDoughTypeChange).toHaveBeenCalledWith({
      id: 'dough-slim',
      value: 'slim',
      checked: true,
    });
  });

  it('коллбек `onSizeChange` передается корректно', () => {
    const onSizeChange = jest.fn();
    const { getByLabelText } = renderWithThemeProvider(
      <PizzaBlock {...pizza} onSizeChange={onSizeChange} />
    );

    expect(getByLabelText(/30/i)).toBeChecked();
    expect(getByLabelText(/35/i)).not.toBeChecked();

    userEvent.click(getByLabelText(/35/i));
    expect(onSizeChange).toHaveBeenCalledWith({
      id: 'size-35',
      value: 35,
      checked: true,
    });
  });

  it('коллбек `onStuffedCrustChange` передается корректно', () => {
    const onStuffedCrustChange = jest.fn();
    const { getByText, getByRole } = renderWithThemeProvider(
      <PizzaBlock {...pizza} onStuffedCrustChange={onStuffedCrustChange} />
    );

    const selectStuffedCrust = getByRole('textbox', { hidden: true });
    userEvent.click(selectStuffedCrust);
    userEvent.click(getByText(/Сырный борт/i));

    expect(onStuffedCrustChange).toHaveBeenCalledWith('cheese');
  });

  it('коллбек `onAddToCartClick` передается корректно', () => {
    const onAddToCartClick = jest.fn();
    const { getByText } = renderWithThemeProvider(
      <PizzaBlock {...pizza} onAddToCartClick={onAddToCartClick} />
    );

    userEvent.click(getByText(/В корзину/i));
    expect(onAddToCartClick).toHaveBeenCalled();
  });

  it('передача параметра `isStuffedCrustAvailable` влияет на отрисовку селекта выбора бортика', () => {
    const { queryByRole, rerender } = renderWithThemeProvider(
      <PizzaBlock {...pizza} isStuffedCrustAvailable={false} />
    );

    expect(queryByRole('textbox', { hidden: true })).not.toBeInTheDocument();

    rerender(<PizzaBlock {...pizza} isStuffedCrustAvailable={true} />);
    expect(queryByRole('textbox', { hidden: true })).toBeInTheDocument();
  });
});
