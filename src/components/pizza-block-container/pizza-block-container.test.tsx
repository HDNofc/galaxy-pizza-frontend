import userEvent from '@testing-library/user-event';
import renderWithStore from 'test-utils/render-with-store';
import PizzaBlockContainer from './pizza-block-container';
import pizza from './__mocks__/index.js';

describe('<PizzaBlockContainer>', () => {
  it('отображается корректно', () => {
    const { container, getAllByRole, queryByRole, getByText, getByLabelText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByText(/Большая бонанза/i)).toBeInTheDocument();
    expect(getByText(/Оригинальная пицца с говядиной/i)).toBeInTheDocument();

    expect(getAllByRole('img', { hidden: true })[0]).toHaveAttribute(
      'src',
      'test-fat-crop-image.jpg'
    );
    expect(container.querySelector('source')).toHaveAttribute('srcset', 'test-fat-crop-image.webp');

    expect(getByText(/23/i)).toBeInTheDocument();
    expect(getByLabelText('23')).toBeChecked();
    expect(getByText(/30/i)).toBeInTheDocument();
    expect(getByText(/35/i)).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();

    expect(getByText(/459 ₽/i)).toBeInTheDocument();
    expect(queryByRole('textbox', { hidden: true })).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('переключение типа теста происходит корректно', () => {
    const { getByLabelText } = renderWithStore(<PizzaBlockContainer pizzaItem={pizza} />);

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText(/тонкое/i)).not.toBeChecked();

    userEvent.click(getByLabelText(/тонкое/i));

    expect(getByLabelText(/традиционное/i)).not.toBeChecked();
    expect(getByLabelText(/тонкое/i)).toBeChecked();
  });

  it('изменение изображения при переключении типа теста происходит корректно', () => {
    const { container, getByLabelText, getByRole } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByRole('img', { hidden: true })).toHaveAttribute('src', 'test-fat-crop-image.jpg');
    expect(container.querySelector('source')).toHaveAttribute('srcset', 'test-fat-crop-image.webp');

    userEvent.click(getByLabelText(/тонкое/i));

    expect(getByRole('img', { hidden: true })).toHaveAttribute('src', 'test-slim-crop-image.jpg');
    expect(container.querySelector('source')).toHaveAttribute(
      'srcset',
      'test-slim-crop-image.webp'
    );
  });

  it('при переключении типа теста размер пиццы остается прежним', () => {
    const { getByLabelText, getByText, queryByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    // переключаем с 23см на 30см, т.к. 23см пиццы на тонком тесте нету в исходных данных
    userEvent.click(getByLabelText('30'));

    expect(getByText(/23/i)).toBeInTheDocument();
    expect(getByText(/30/i)).toBeInTheDocument();
    expect(getByLabelText('30')).toBeChecked();
    expect(getByText(/35/i)).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();

    userEvent.click(getByLabelText(/тонкое/i));

    expect(queryByText(/23/i)).not.toBeInTheDocument();
    expect(getByText(/30/i)).toBeInTheDocument();
    expect(getByLabelText('30')).toBeChecked();
    expect(getByText(/35/i)).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();
  });

  it('при переключении типа теста выбирается минимальный размер пиццы, если прежний размер пиццы недоступен', () => {
    const { getByLabelText, getByText, queryByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByText(/23/i)).toBeInTheDocument();
    expect(getByLabelText('23')).toBeChecked();
    expect(getByText(/30/i)).toBeInTheDocument();
    expect(getByText(/35/i)).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();

    userEvent.click(getByLabelText(/тонкое/i));

    expect(queryByText(/23/i)).not.toBeInTheDocument();
    expect(getByText(/30/i)).toBeInTheDocument();
    expect(getByLabelText('30')).toBeChecked();
    expect(getByText(/35/i)).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();
  });

  it('при переключении типа теста изменяется цена', () => {
    const { getByLabelText, getByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText('23')).toBeChecked();
    expect(getByText(/459 ₽/i)).toBeInTheDocument();

    userEvent.click(getByLabelText(/тонкое/i));
    expect(getByText(/669 ₽/i)).toBeInTheDocument();
  });

  it('при переключении размера изменяется цена', () => {
    const { getByLabelText, getByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText('23')).toBeChecked();
    expect(getByText(/459 ₽/i)).toBeInTheDocument();

    userEvent.click(getByLabelText(/35/i));
    expect(getByText(/809 ₽/i)).toBeInTheDocument();
  });

  it('селект выбора кастомного бортика отображается в традиционном тесте на размере 30см+', () => {
    const { getByLabelText, queryByText, getByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText('23')).toBeChecked();
    expect(queryByText(/Стандартный борт/i)).not.toBeInTheDocument();

    userEvent.click(getByLabelText(/30/i));
    expect(getByText(/Стандартный борт/i)).toBeInTheDocument();
  });

  it('селект выбора кастомного бортика не отображается в тонком тесте', () => {
    const { getByLabelText, queryByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    expect(getByLabelText(/традиционное/i)).toBeChecked();
    expect(getByLabelText('23')).toBeChecked();
    expect(queryByText(/Стандартный борт/i)).not.toBeInTheDocument();

    userEvent.click(getByLabelText(/30/i));
    userEvent.click(getByLabelText(/тонкое/i));
    expect(queryByText(/Стандартный борт/i)).not.toBeInTheDocument();
  });

  it('селект выбора кастомного бортика переключается корректно', () => {
    const { getByLabelText, queryByText, getByRole, getByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    userEvent.click(getByLabelText(/30/i));
    expect(queryByText(/стандартный борт/i)).toBeInTheDocument();

    const select = getByRole('textbox', { hidden: true });
    userEvent.click(select);

    userEvent.click(getByText(/сырный борт/i));
    expect(queryByText(/сырный борт/i)).toBeInTheDocument();
    expect(queryByText(/стандартный борт/i)).not.toBeInTheDocument();
  });

  it('при смене кастомного бортика изменяется цена', () => {
    const { getByLabelText, queryByText, getByRole, getByText } = renderWithStore(
      <PizzaBlockContainer pizzaItem={pizza} />
    );

    userEvent.click(getByLabelText(/30/i));
    expect(queryByText(/стандартный борт/i)).toBeInTheDocument();
    expect(getByText(/669 ₽/i)).toBeInTheDocument();

    const select = getByRole('textbox', { hidden: true });
    userEvent.click(select);

    userEvent.click(getByText(/сырный борт/i));
    expect(getByText(/868 ₽/i)).toBeInTheDocument();

    userEvent.click(select);
    userEvent.click(getByText(/колбасный борт/i));
    expect(getByText(/888 ₽/i)).toBeInTheDocument();
  });
});
