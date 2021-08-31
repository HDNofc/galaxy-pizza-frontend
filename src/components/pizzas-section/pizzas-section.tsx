import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const PizzasSection = ({ children }: Props): React.ReactElement => {
  return <S.PizzaSection>{children}</S.PizzaSection>;
};

export default PizzasSection;
