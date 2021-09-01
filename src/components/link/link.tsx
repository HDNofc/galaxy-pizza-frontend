import * as S from './styles';

import { LinkProps } from 'react-router-dom';

export interface Props {
  children?: React.ReactNode;
  to?: LinkProps['to'];
  onClick?: () => void;
  href?: string;
  light?: boolean;
  standard?: boolean;
  selected?: boolean;
  external?: boolean;
}

const Link = ({
  to,
  href,
  children,
  light,
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
      $light={light}
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
      $light={light}
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
