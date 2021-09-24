import styled, { keyframes } from 'styled-components/macro';

interface ContentProps {
  $isImageLoaded: boolean;
}

interface PlaceholderProps {
  $fadeInDelay?: number;
}

const fadeIn = keyframes`
 0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const ImagePlaceholder = styled.div``;

export const Placeholder = styled.div<PlaceholderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-delay: ${({ $fadeInDelay }) => $fadeInDelay}s;
  animation-fill-mode: forwards;
`;

export const Content = styled.div<ContentProps>`
  > * {
    display: ${({ $isImageLoaded }) => ($isImageLoaded ? 'flex' : 'none')};
  }
`;
