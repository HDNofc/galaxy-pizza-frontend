import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import Hamburger from './hamburger';

describe('<Hamburger>', () => {
  const defaultProps = {
    active: false,
    onClick: () => {},
  };

  it('отображается корректно с пропсом `active: false`', () => {
    const { container } = renderWithThemeProvider(<Hamburger {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('отображается корректно с пропсом `active: true`', () => {
    const { container } = renderWithThemeProvider(<Hamburger {...defaultProps} active={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('коллбек `onClick` вызывается корректно', () => {
    const onClick = jest.fn();
    const { getByRole } = renderWithThemeProvider(
      <Hamburger {...defaultProps} onClick={onClick} />
    );

    userEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
