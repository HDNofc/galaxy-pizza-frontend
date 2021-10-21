import { MemoryRouter } from 'react-router-dom';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import Logo from './logo';

describe('<Logo>', () => {
  it('отображается корректно', () => {
    const { container } = renderWithThemeProvider(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('отображается корректно с пропсом `to`', () => {
    const { container } = renderWithThemeProvider(
      <MemoryRouter>
        <Logo to="/" />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
