import { MemoryRouter } from 'react-router-dom';
import renderWithStore from 'test-utils/render-with-store';
import AppLayout from './app-layout';

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

describe('<AppLayout>', () => {
  it('отображается корректно', () => {
    const { container } = renderWithStore(
      <MemoryRouter>
        <AppLayout>
          <div>content</div>
        </AppLayout>
      </MemoryRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
