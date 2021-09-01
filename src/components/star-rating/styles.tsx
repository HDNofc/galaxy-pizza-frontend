import styled from 'styled-components/macro';

interface Props {
  $rating: number;
  $starAmount: 1 | 5;
  $size: number;
}

export const StarRating = styled.div<Props>`
  /* stylelint-disable */
  --percent: calc(${({ $rating }) => $rating} / 5 * 100%);

  display: inline-block;
  font-size: ${({ $size }) => $size}px;
  font-family: ${({ theme }) => theme.fonts.fontAdditional};
  line-height: 1;
  vertical-align: top;

  &::before {
    letter-spacing: 3px;
    background: linear-gradient(90deg, #fc0 var(--percent), #fff var(--percent));
    content: '${({ $starAmount }) => '★'.repeat($starAmount)}';
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
