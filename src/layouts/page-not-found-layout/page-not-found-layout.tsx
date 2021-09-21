import * as S from './page-not-found-layout.styles';

interface Props {
  children: React.ReactNode;
}

const PageNotFoundLayout = ({ children }: Props) => {
  return <S.PageNotFoundLayout>{children}</S.PageNotFoundLayout>;
};

export default PageNotFoundLayout;
