import * as S from './image-placeholder.styles';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  placeholderComponent: React.ReactNode;
  fadeInDelay?: number;
}

const ImagePlaceholder = ({
  children,
  placeholderComponent,
  fadeInDelay = 0.4,
  ...otherProps
}: Props): React.ReactElement => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onLoadImage = () => {
    setIsImageLoaded(true);
  };

  return (
    <S.ImagePlaceholder {...otherProps} onLoad={onLoadImage}>
      <S.Placeholder $fadeInDelay={fadeInDelay}>
        {!isImageLoaded && placeholderComponent}
      </S.Placeholder>
      <S.Content $isImageLoaded={isImageLoaded}>{children}</S.Content>
    </S.ImagePlaceholder>
  );
};

export default ImagePlaceholder;
