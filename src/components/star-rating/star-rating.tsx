import * as S from './styles';

interface Props {
  rating: number;
  starAmount?: 1 | 5;
  size?: number;
}

const StarRating = ({ rating, starAmount = 5, size = 30 }: Props): React.ReactElement => {
  return <S.StarRating $rating={rating} $starAmount={starAmount} $size={size}></S.StarRating>;
};

export default StarRating;
