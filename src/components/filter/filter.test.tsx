import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import Filter from './filter';

const FilterItems = [
  {
    id: 'id-1',
    to: '/somewhere',
    text: 'фильтр-1',
  },
  {
    id: 'id-2',
    to: '/somewhere',
    text: 'фильтр-2',
  },
  {
    id: 'id-3',
    to: '/taste/hot',
    text: 'фильтр-3',
  },
];

describe('<Filter>', () => {
  const defaultProps = {
    items: FilterItems,
    onFilterItemClick: () => {},
  };

  it('отображается корректно', () => {
    const { container, getByText } = renderWithThemeProvider(
      <MemoryRouter>
        <Filter {...defaultProps} />
      </MemoryRouter>
    );

    expect(container.querySelectorAll('a')).toHaveLength(3);
    expect(getByText(/фильтр-1/i)).toBeInTheDocument();
    expect(getByText(/фильтр-1/i)).toHaveAttribute('href', '/somewhere');
    expect(getByText(/фильтр-3/i)).toBeInTheDocument();
    expect(getByText(/фильтр-3/i)).toHaveAttribute('href', '/taste/hot');
  });

  it('коллбек вызывается корректно', () => {
    const onClick = jest.fn();

    const { getByText } = renderWithThemeProvider(
      <MemoryRouter>
        <Filter {...defaultProps} onFilterItemClick={onClick} />
      </MemoryRouter>
    );

    userEvent.click(getByText(/фильтр-1/i));
    expect(onClick).toHaveBeenCalled();

    userEvent.click(getByText(/фильтр-2/i));
    expect(onClick).toHaveBeenCalled();
  });
});
