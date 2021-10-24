import userEvent from '@testing-library/user-event';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';
import RadioGroup from './radio-group';

const RadioItemsStub = [
  {
    id: 'id-1',
    value: 23,
    label: '23см',
    checked: true,
  },
  {
    id: 'id-2',
    value: 30,
    label: '30см',
  },
  {
    id: 'id-3',
    value: 35,
    label: '35см',
  },
  {
    id: 'id-4',
    value: 40,
    label: '40см',
  },
];

describe('<RadioGroup>', () => {
  const defaultProps = {
    items: RadioItemsStub,
    onChange: () => {},
    name: 'sizes',
  };

  it('отображается корректно с верным количество элементов', () => {
    const { getAllByRole } = renderWithThemeProvider(<RadioGroup {...defaultProps} />);
    expect(getAllByRole('radio').length).toEqual(4);
  });

  it('по-умолчанию выбран первый элемент', () => {
    const { getAllByRole } = renderWithThemeProvider(<RadioGroup {...defaultProps} />);
    expect(getAllByRole('radio')[0]).toBeChecked();
  });

  it('при переключении вызывается коллбек с корректными параметрами', () => {
    const onChange = jest.fn();

    const { getByLabelText } = renderWithThemeProvider(
      <RadioGroup {...defaultProps} onChange={onChange} />
    );

    userEvent.click(getByLabelText('30см'));
    expect(onChange).toHaveBeenCalledWith({
      id: 'id-2',
      value: 30,
      checked: true,
    });
  });
});
