import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';
import variables from 'styles/variables';

function renderWithThemeProvider(ui) {
  return render(<ThemeProvider theme={variables}>{ui}</ThemeProvider>);
}

export default renderWithThemeProvider;
