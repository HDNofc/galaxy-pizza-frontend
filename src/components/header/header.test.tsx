import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderWithStore from 'test-utils/render-with-store';
import Header from './header';

const locationState = {
  planetLocation: {
    planetLocation: 'venus',
  },
};

const links = [
  {
    icon: 'path-to-icon.png',
    id: 'id-1',
    to: '/somewhere',
    text: 'link-1',
  },
  {
    id: 'id-2',
    to: '/login',
    text: 'link-2',
  },
  {
    id: 'id-3',
    to: '/about',
    text: 'link-3',
  },
];

beforeEach(() => {
  /* https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom */
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('<Header>', () => {
  const defaultProps = {
    links: links,
  };

  it('отображается корректно', () => {
    const history = createMemoryHistory();

    const { container, getByText, getByRole } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    expect(getByText('mail@example.com')).toBeInTheDocument();
    expect(getByText('8 (800) 999-99-99')).toBeInTheDocument();

    expect(getByText(/link-1/i)).toBeInTheDocument();
    expect(getByText(/link-2/i)).toBeInTheDocument();
    expect(getByText(/link-3/i)).toBeInTheDocument();

    expect(getByRole('heading')).toHaveTextContent(/Galaxy Pizza/i);

    expect(getByText(/венера/i)).toBeInTheDocument();
    expect(getByText(/14 минут/i)).toBeInTheDocument();
    expect(getByText(/4.6/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Ссылка на текущий роут выделена цветом', () => {
    const history = createMemoryHistory();
    const { getByText } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    const aboutLink = getByText('link-3');
    expect(aboutLink).toHaveStyleRule('color', '#ffffff');

    history.push('/about');
    expect(aboutLink).toHaveStyleRule('color', '#fca311');
  });

  it('Логотип становится ссылкой на главную в зависимости от роута', () => {
    const history = createMemoryHistory();
    const { container } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    let logoLink = container.querySelector('header a[href="/"]');
    expect(logoLink).not.toBeInTheDocument();

    history.push('/about');

    logoLink = container.querySelector('header a[href="/"]');
    expect(logoLink).toBeInTheDocument();
  });

  it('Изменение геолокации происходит корректно', () => {
    const history = createMemoryHistory();
    const { getByRole, getByText } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    expect(getByText(/венера/i)).toBeInTheDocument();
    expect(getByText(/14 минут/i)).toBeInTheDocument();
    expect(getByText(/4.6/i)).toBeInTheDocument();

    userEvent.click(getByRole('textbox', { hidden: true }));
    userEvent.click(getByText(/сатурн/i));

    expect(getByText(/сатурн/i)).toBeInTheDocument();
    expect(getByText(/1 час 15 минут/i)).toBeInTheDocument();
    expect(getByText(/4.2/i)).toBeInTheDocument();
  });

  it('Нажатие по гамбургеру происходит корректно', () => {
    const history = createMemoryHistory();
    const { container, getByRole } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    const menu = container.querySelector('[class*="HeaderMenu"]');
    expect(menu).toHaveStyleRule('display', 'none');

    userEvent.click(getByRole('button', { hidden: true }));
    expect(menu).toHaveStyleRule('display', 'flex');
  });

  it('Переход по ссылкам в меню происходит корректно', () => {
    const history = createMemoryHistory();
    const { getByText } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    expect(history.location.pathname).toEqual('/');

    userEvent.click(getByText(/link-1/i));
    expect(history.location.pathname).toEqual('/somewhere');
    userEvent.click(getByText(/link-2/i));
    expect(history.location.pathname).toEqual('/login');
    userEvent.click(getByText(/link-3/i));
    expect(history.location.pathname).toEqual('/about');
  });

  it('Мобильное меню закрывается при переходе по ссылке', () => {
    const history = createMemoryHistory();
    const { container, getByRole, getByText } = renderWithStore(
      <Router history={history}>
        <Header {...defaultProps} />
      </Router>,
      { state: locationState }
    );

    const menu = container.querySelector('[class*="HeaderMenu"]');
    expect(menu).toHaveStyleRule('display', 'none');

    userEvent.click(getByRole('button', { hidden: true }));
    expect(menu).toHaveStyleRule('display', 'flex');

    userEvent.click(getByText(/link-1/i));
    expect(menu).toHaveStyleRule('display', 'none');
  });
});
