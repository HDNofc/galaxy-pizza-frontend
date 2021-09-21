import * as S from './star.styles';

import { ReactComponent as FullStar } from './icons/full.svg';
import { ReactComponent as HalfStar } from './icons/half.svg';
import { ReactComponent as ZeroStar } from './icons/zero.svg';

interface Props {
  type?: 'full' | 'half' | 'zero';
}

const Star = ({ type = 'full' }: Props): React.ReactElement => {
  return (
    <S.Star>
      {type === 'full' && <FullStar style={{ height: '20px' }} />}
      {type === 'half' && <HalfStar style={{ height: '20px' }} />}
      {type === 'zero' && <ZeroStar style={{ height: '20px' }} />}
    </S.Star>
  );
};

export default Star;
