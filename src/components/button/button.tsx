import * as S from './styles';

interface Props {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactElement;
  type?: 'submit' | 'reset' | 'button';
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
  standard?: boolean;
  link?: boolean;
  onlyIcon?: boolean;
}

const Button = ({
  children = null,
  text = '',
  type = 'button',
  standard = false,
  link = false,
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
      $link={link}
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
