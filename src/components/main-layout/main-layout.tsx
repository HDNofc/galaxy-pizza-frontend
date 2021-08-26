import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children, ...otherProps }: Props): React.ReactElement => {
  return <S.MainLayout {...otherProps}>{children}</S.MainLayout>;
};

export default MainLayout;
