import * as S from './button.styles';

interface Props {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactElement;
  type?: 'submit' | 'reset' | 'button';
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
  standard?: boolean;
  secondary?: boolean;
  link?: boolean;
  medium?: boolean;
  large?: boolean;
  onlyIcon?: boolean;
}

const Button = ({
  children = null,
  text = '',
  type = 'button',
  standard = false,
  secondary = false,
  link = false,
  medium = false,
  large = false,
  onlyIcon = false,
  icon,
  onClick = () => {},
  ...otherProps
}: Props): React.ReactElement => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      $standard={standard}
      $secondary={secondary}
      $link={link}
      $medium={medium}
      $large={large}
      $onlyIcon={onlyIcon}
      {...otherProps}
    >
      {text && <S.Text>{text}</S.Text>}
      {icon}
      {children}
    </S.Button>
  );
};

export default Button;
