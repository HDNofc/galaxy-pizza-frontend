import userEvent from '@testing-library/user-event';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import GeoLocationSelector from './geo-location-selector';

const selectItems = [
  {
    label: 'Меркурий',
    value: 'mercury',
  },
  {
    label: 'Венера',
    value: 'venus',
  },
  {
    label: 'Марс',
    value: 'mars',
  },
];

describe('<GeoLocationSelector>', () => {
  const defaultProps = {
    items: selectItems,
    onChange: () => {},
  };

  it('отображается корректно', () => {
    const { getByText, getByRole } = renderWithThemeProvider(
      <GeoLocationSelector {...defaultProps} />
    );

    expect(getByText(/Select/i)).toBeInTheDocument();
    userEvent.click(getByRole('textbox'));

    expect(getByText(/венера/i)).toBeInTheDocument();
    expect(getByText(/марс/i)).toBeInTheDocument();
  });

  it('значение по-умолчанию передается корректно', () => {
    const { getByText } = renderWithThemeProvider(
      <GeoLocationSelector
        {...defaultProps}
        defaultValue={{
          label: 'Венера',
          value: 'venus',
        }}
      />
    );

    expect(getByText(/Венера/i)).toBeInTheDocument();
  });

  it('коллбек `onChange` вызывается корректно', () => {
    const onChange = jest.fn();

    const { getByText, getByRole } = renderWithThemeProvider(
      <GeoLocationSelector {...defaultProps} onChange={onChange} />
    );

    expect(getByText(/select/i)).toBeInTheDocument();
    userEvent.click(getByRole('textbox'));
    userEvent.click(getByText(/Марс/i));
    expect(onChange).toHaveBeenCalledWith('mars');
  });
});
