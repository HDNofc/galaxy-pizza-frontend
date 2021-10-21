import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StuffedCrustSelect from './stuffed-crust-select';

describe('<StuffedCrustSelect>', () => {
  it('выбор активного опции в селекте происходит корректно', () => {
    const defaultProps = {
      stuffedCrusts: ['none', 'cheese', 'sausage'],
      onChange: () => {},
    };
    const { getByText, getByRole } = render(<StuffedCrustSelect {...defaultProps} />);
    const selectedValue = getByText(/стандартный борт/i);

    const input = getByRole('textbox');
    expect(input).not.toHaveValue();

    userEvent.click(input);
    userEvent.click(getByText(/сырный борт/i));
    expect(selectedValue).toHaveTextContent(/сырный борт/i);

    userEvent.click(input);
    userEvent.click(getByText(/колбасный борт/i));
    expect(selectedValue).toHaveTextContent(/колбасный борт/i);
  });

  it('отображается переданное количество элементов', () => {
    const defaultProps = {
      stuffedCrusts: ['none', 'sausage'],
      onChange: () => {},
    };
    const { getByRole, container } = render(<StuffedCrustSelect {...defaultProps} />);

    const input = getByRole('textbox');
    userEvent.click(input);

    expect(container.querySelectorAll('[id*="option"]')).toHaveLength(2);
  });

  it('коллбек вызывается с правильным значением', () => {
    const onChange = jest.fn();
    const defaultProps = {
      stuffedCrusts: ['none', 'cheese', 'sausage'],
    };

    const { getByRole, container } = render(
      <StuffedCrustSelect {...defaultProps} onChange={onChange} />
    );

    const input = getByRole('textbox');
    userEvent.click(input);

    userEvent.click(container.querySelectorAll('[id*="option"]')[0]);
    expect(onChange).toHaveBeenCalledWith('sausage');
  });
});
