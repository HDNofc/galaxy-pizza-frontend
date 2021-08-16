import { ButtonText, StyledButton } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
  standard?: boolean;
}

const Button = ({
  children = null,
  text = '',
  type = 'button',
  standard = false,
  onClick = () => {},
  ...otherProps
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton type={type} onClick={onClick} standard={standard} {...otherProps}>
      {text && <ButtonText>{text}</ButtonText>}
      {children}
    </StyledButton>
  );
};

export default Button;
