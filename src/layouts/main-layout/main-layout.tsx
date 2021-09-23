import Filter from './components/filter';
import * as S from './main-layout.styles';

interface Props {
  promo: React.ReactNode;
  filter: React.ReactNode;
  pizzaSection: React.ReactNode;
  cart: React.ReactNode;
  floatingCart: React.ReactNode;
  getPizzasContainerRef: (ref: HTMLDivElement | null) => void;
}

const MainLayout = ({
  promo,
  cart,
  filter,
  pizzaSection,
  floatingCart,
  getPizzasContainerRef,
}: Props): React.ReactElement => {
  return (
    <S.MainLayout>
      <S.Promo>{promo}</S.Promo>
      <Filter>{filter}</Filter>
      <S.PizzasContent ref={(el) => getPizzasContainerRef(el)}>
        <S.PizzasSection>{pizzaSection}</S.PizzasSection>
        <S.Cart>{cart}</S.Cart>
      </S.PizzasContent>
      {floatingCart && <S.FloatingCart>{floatingCart}</S.FloatingCart>}
    </S.MainLayout>
  );
};

export default MainLayout;
