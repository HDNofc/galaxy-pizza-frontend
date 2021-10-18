import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Link from './link';

describe('<Link>', () => {
  it('отображается Link из react-router-dom, если передан пропс `to`', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Link to="https://example.com" />
      </MemoryRouter>
    );

    expect(getByRole('link')).toHaveAttribute('href', '/https://example.com');
  });

  it('отображается html-тег <a>, если передан пропс `href`', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Link href="https://example.com" />
      </MemoryRouter>
    );

    expect(getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('вызывается пропс onClick при клике на ссылку', () => {
    const onClick = jest.fn();

    const { getByRole } = render(
      <MemoryRouter>
        <Link href="https://example.com" onClick={onClick}>
          Home page
        </Link>
      </MemoryRouter>
    );

    userEvent.click(getByRole('link'));
    expect(onClick).toHaveBeenCalled();
  });

  it('добавляется необходимые атрибуты при передачи пропса `external`', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Link href="https://example.com" external>
          Home page
        </Link>
      </MemoryRouter>
    );

    expect(getByRole('link')).toHaveAttribute('target', '_blank');
    expect(getByRole('link')).toHaveAttribute('rel', 'nofollow noopener noreferrer');
  });
});
