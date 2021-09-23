import * as S from './page-not-found-template.styles';

interface Props {
  children: React.ReactNode;
}

const PageNotFoundTemplate = ({ children }: Props) => {
  return <S.PageNotFoundTemplate>{children}</S.PageNotFoundTemplate>;
};

export default PageNotFoundTemplate;
