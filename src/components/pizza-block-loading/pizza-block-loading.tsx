import * as S from './styles';

import ContentLoader from 'react-content-loader';

interface Props {}

const PizzaBlockLoading = (props: Props): React.ReactElement => {
  return (
    <S.PizzaBlockLoading>
      <ContentLoader
        speed={2}
        viewBox="0 0 305 520"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="11" ry="11" width="300" height="240" />
        <rect x="0" y="297" rx="6" ry="6" width="305" height="72" />
        <rect x="0" y="377" rx="6" ry="6" width="305" height="36" />
        <rect x="0" y="421" rx="6" ry="6" width="305" height="36" />
        <rect x="0" y="267" rx="6" ry="6" width="305" height="20" />
        <rect x="0" y="472" rx="6" ry="6" width="115" height="46" />
        <rect x="257" y="486" rx="2" ry="2" width="46" height="18" />
      </ContentLoader>
    </S.PizzaBlockLoading>
  );
};

export default PizzaBlockLoading;
