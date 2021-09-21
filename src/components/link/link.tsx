import * as S from './link.styles';

import { LinkProps } from 'react-router-dom';

export interface Props {
  children?: React.ReactNode;
  to?: LinkProps['to'];
  onClick?: () => void;
  href?: string;
  alternative?: boolean;
  standard?: boolean;
  selected?: boolean;
  external?: boolean;
}

const Link = ({
  to,
  href,
  children,
  alternative,
  standard,
  selected,
  external,
  onClick,
  ...otherProps
}: Props): React.ReactElement => {
  const externalLinkProps = external
    ? {
        target: '_blank',
        rel: 'nofollow noopener noreferrer',
      }
    : {};

  return to ? (
    <S.Link
      to={to}
      onClick={onClick}
      $alternative={alternative}
      $standard={standard}
      $selected={selected}
      {...otherProps}
    >
      {children}
    </S.Link>
  ) : (
    <S.NativeLink
      href={href}
      onClick={onClick}
      $alternative={alternative}
      $standard={standard}
      $selected={selected}
      {...externalLinkProps}
      {...otherProps}
    >
      {children}
    </S.NativeLink>
  );
};

export default Link;
