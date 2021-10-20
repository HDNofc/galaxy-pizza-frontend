import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button';

describe('<Button>', () => {
  it('отображается корректно', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('отображается корректно текст через пропс `text`', () => {
    const { getByRole } = render(<Button text="Добавить" />);
    expect(getByRole('button')).toHaveTextContent(/добавить/i);
  });

  it('отображается с типом `button` по-умолчанию', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('отображается с корректным пропсом `type`, если передан', () => {
    const { getByRole, rerender } = render(<Button type="submit" />);
    expect(getByRole('button')).toHaveAttribute('type', 'submit');

    rerender(<Button type="reset" />);
    expect(getByRole('button')).toHaveAttribute('type', 'reset');
  });

  it('корректно вызывается пропс onClick', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} />);

    userEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('отображается с типом `button` по-умолчанию', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });
});
