import Button from 'components/button';
import * as S from './hamburger.styles';

interface Props {
  children?: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const Hamburger = ({ active, onClick, ...otherProps }: Props): React.ReactElement => {
  return (
    <S.Hamburger as={Button} onClick={onClick} {...otherProps}>
      <S.InnerWrapper $active={active}>
        <span />
        <span />
        <span />
      </S.InnerWrapper>
    </S.Hamburger>
  );
};

export default Hamburger;
