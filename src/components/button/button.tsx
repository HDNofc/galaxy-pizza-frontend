import { ButtonText, StyledButton } from './styles';

interface ButtonProps {
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
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      standard={standard}
      link={link}
      onlyIcon={onlyIcon}
      {...otherProps}
    >
      {text && <ButtonText>{text}</ButtonText>}
      {icon}
      {children}
    </StyledButton>
  );
};

export default Button;
