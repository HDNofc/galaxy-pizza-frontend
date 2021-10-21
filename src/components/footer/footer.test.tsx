import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import Footer from './footer';

describe('<Footer>', () => {
  it('отображается корректно', () => {
    const { container } = renderWithThemeProvider(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
