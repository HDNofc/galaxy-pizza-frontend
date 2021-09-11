import Header from 'components/header';
import * as S from './styles';

import menuLinks from 'constants/menu-links';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children, ...otherProps }: Props): React.ReactElement => {
  return (
    <>
      <Header links={menuLinks} />
      <S.AppLayout {...otherProps}>{children}</S.AppLayout>
    </>
  );
};

export default AppLayout;
