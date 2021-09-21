import Footer from 'components/footer';
import Header from 'components/header';
import * as S from './app-layout.styles';

import menuLinks from 'constants/menu-links';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children, ...otherProps }: Props): React.ReactElement => {
  return (
    <S.AppLayout>
      <Header links={menuLinks} />
      <S.AppLayoutContent {...otherProps}>{children}</S.AppLayoutContent>
      <Footer />
    </S.AppLayout>
  );
};

export default AppLayout;
