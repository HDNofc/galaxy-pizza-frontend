import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const PageLayout = ({ children, ...otherProps }: Props): React.ReactElement => {
  return (
    <>
      <S.PageLayout {...otherProps}>{children}</S.PageLayout>
    </>
  );
};

export default PageLayout;
