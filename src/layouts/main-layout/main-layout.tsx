import Filter from './components/filter';
import * as S from './styles';

interface Props {
  promo: React.ReactNode;
  filter: React.ReactNode;
  pizzaSection: React.ReactNode;
  cart: React.ReactNode;
}

const MainLayout = ({ promo, cart, filter, pizzaSection }: Props): React.ReactElement => {
  return (
    <S.MainLayout>
      <S.Promo>{promo}</S.Promo>
      <Filter>{filter}</Filter>
      <S.PizzasContent>
        <S.PizzasSection>{pizzaSection}</S.PizzasSection>
        <S.Cart>{cart}</S.Cart>
      </S.PizzasContent>
    </S.MainLayout>
  );
};

export default MainLayout;
