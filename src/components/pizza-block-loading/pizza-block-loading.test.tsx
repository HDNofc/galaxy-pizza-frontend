import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import PizzaBlockLoading from './pizza-block-loading';
import 'jest-styled-components';

describe('<PizzaBlockLoading>', () => {
  it('отображается корректно', () => {
    const { container } = renderWithThemeProvider(<PizzaBlockLoading />);

    const wrapper = container.querySelector('div');
    expect(wrapper).toHaveStyleRule('width', '100%');
  });
});
