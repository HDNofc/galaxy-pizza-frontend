import Header from 'components/header';
import * as S from './styles';

import menuLinks from 'constants/menu-links';

interface Props {
  children: React.ReactNode;
}

const PageLayout = ({ children, ...otherProps }: Props): React.ReactElement => {
  return (
    <>
      <Header links={menuLinks} />
      <S.PageLayout {...otherProps}>{children}</S.PageLayout>
    </>
  );
};

export default PageLayout;
