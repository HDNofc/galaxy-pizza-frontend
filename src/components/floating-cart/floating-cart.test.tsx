import { MemoryRouter } from 'react-router-dom';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import FloatingCart from './floating-cart';

describe('<FloatingCart>', () => {
  it('отображается корректно', () => {
    const { getByText, rerender } = renderWithThemeProvider(
      <MemoryRouter>
        <FloatingCart amount={500} />
      </MemoryRouter>
    );
    expect(getByText(/500 ₽/i)).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <FloatingCart amount={3000} />
      </MemoryRouter>
    );
    expect(getByText(/3 000 ₽/i)).toBeInTheDocument();
  });
});
