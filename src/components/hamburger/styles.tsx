import styled, { css } from 'styled-components/macro';

const color = '#303030';

const heightIcon = '16px';
const widthLine = '24px';
const heightLine = '3px';

const transitionTime = '0.3s';
const rotation = '45deg';
const translateY = `${parseInt(heightIcon) / 2}px`;
const translateX = '0';

interface Props {
  $active?: boolean;
}

export const Hamburger = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
`;

export const InnerWrapper = styled.div<Props>`
  position: relative;
  display: block;
  width: ${widthLine};
  height: ${heightIcon};

  span {
    position: absolute;
    left: 0;
    display: block;
    width: ${widthLine};
    height: ${heightLine};
    background: ${color};
    border-radius: ${parseInt(heightLine) / 2}px;
    transition: all ${transitionTime};
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 50%;
  }

  span:nth-child(3) {
    top: 100%;
  }

  ${({ $active }) =>
    $active &&
    css`
      span:nth-child(1) {
        transform: translateY(${translateY}) translateX(${translateX}) rotate(${rotation});
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(${parseInt(translateY) * -1}px) translateX(${parseInt(translateX)}px)
          rotate(${parseInt(rotation) * -1}deg);
      }
    `}
`;
