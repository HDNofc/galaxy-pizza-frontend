import Star from 'components/star';
import roundHalf from 'helpers/round-half';
import * as S from './star-rating.styles';

interface Props {
  rating: number;
  starAmount?: 1 | 5;
}

const StarRating = ({ rating, starAmount = 5 }: Props): React.ReactElement => {
  const renderStars = () => {
    const roundedRating = roundHalf(rating);
    const fullStars = Math.trunc(roundedRating);
    const halfStar = roundedRating - Math.trunc(roundedRating) > 0 ? 1 : 0;
    const zeroStars = 5 - (fullStars + halfStar);

    return (
      <>
        {Array.from(Array(fullStars), (v, i) => (
          <Star key={`full-star-${i + 1}`} />
        ))}

        {halfStar > 0 && <Star type="half" />}

        {Array.from(Array(zeroStars), (v, i) => (
          <Star key={`zero-star-${i + 1}`} type="zero" />
        ))}
      </>
    );
  };

  return <S.StarRating>{starAmount === 5 ? renderStars() : <Star />}</S.StarRating>;
};

export default StarRating;
