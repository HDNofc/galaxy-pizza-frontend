import userEvent from '@testing-library/user-event';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import RadioGroupField from './radio-group-field';

const defaultProps = {
  value: 'orange',
  name: 'fruits',
  children: 'радио 1',
  onChange: () => {},
};

describe('<RadioGroupField>', () => {
  it('отображается корректно', () => {
    const { container } = renderWithThemeProvider(<RadioGroupField {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('переключается корректно', () => {
    const { getByRole } = renderWithThemeProvider(<RadioGroupField {...defaultProps} />);

    const radioInput = getByRole('radio');
    expect(radioInput).not.toBeChecked();

    userEvent.click(radioInput);
    expect(radioInput).toBeChecked();
  });

  it('коллбек вызывается с корректными параметрами', () => {
    const onChange = jest.fn();
    const { getByRole } = renderWithThemeProvider(
      <RadioGroupField {...defaultProps} onChange={onChange} />
    );
    const radioInput = getByRole('radio');

    userEvent.click(radioInput);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('проп `disabled` применяется корректно', () => {
    const { getByRole } = renderWithThemeProvider(<RadioGroupField {...defaultProps} disabled />);
    const radioInput = getByRole('radio');

    userEvent.click(radioInput);
    expect(radioInput).toBeDisabled();
    expect(radioInput).not.toBeChecked();
  });

  it('проп `id` применяется корректно', () => {
    const { getByRole, getByLabelText } = renderWithThemeProvider(
      <RadioGroupField {...defaultProps} id="simple-id" />
    );

    expect(getByRole('radio')).toHaveAttribute('id', 'simple-id');
    expect(getByLabelText(/радио 1/i)).toHaveAttribute('id', 'simple-id');
  });
});
