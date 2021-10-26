import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import renderWithThemeProvider from 'test-utils/render-with-theme-provider';

import ImagePlaceholder from './image-placeholder';

describe('<ImagePlaceholder>', () => {
  it('плейсхолдер исчезает, когда изображение загружено', () => {
    const { getByText, queryByText, getByTestId } = renderWithThemeProvider(
      <ImagePlaceholder placeholderComponent={<div>placeholder</div>}>
        <img src="image-test.png" alt="" data-testid="test-image" />
      </ImagePlaceholder>
    );

    const imageRef = getByTestId('test-image');
    expect(getByText(/placeholder/i)).toBeInTheDocument();

    fireEvent.load(imageRef);
    expect(queryByText(/placeholder/i)).not.toBeInTheDocument();
  });

  it('fadeInDelay меняется через пропс', () => {
    const { container } = renderWithThemeProvider(
      <ImagePlaceholder fadeInDelay={1} placeholderComponent={<div>placeholder</div>}>
        <img src="image-test.png" alt="" />
      </ImagePlaceholder>
    );

    const placeholderNode = container.querySelectorAll('div[class]')[1];
    expect(placeholderNode).toHaveStyleRule('animation-delay', '1s');
  });
});
