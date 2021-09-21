import * as S from './logo.styles';
import Link from 'components/link';
import { LinkProps } from 'components/link';

interface Props {
  children?: React.ReactNode;
  to?: LinkProps['to'];
}

const Logo = ({ to }: Props): React.ReactElement => {
  return (
    <S.Logo {...(to && { as: Link, to })}>
      <S.LogoIcon width="24" height="100%" />
      <S.Title>Galaxy Pizza</S.Title>
    </S.Logo>
  );
};

export default Logo;
