import Filter from './components/filter';
import * as S from './main-template.styles';

interface Props {
  promo: React.ReactNode;
  filter: React.ReactNode;
  pizzaSection: React.ReactNode;
  cart: React.ReactNode;
  floatingCart: React.ReactNode;
  getPizzasContainerRef: (ref: HTMLDivElement | null) => void;
}

const MainTemplate = ({
  promo,
  cart,
  filter,
  pizzaSection,
  floatingCart,
  getPizzasContainerRef,
}: Props): React.ReactElement => {
  return (
    <S.MainTemplate>
      <S.Promo>{promo}</S.Promo>
      <Filter>{filter}</Filter>
      <S.PizzasContent ref={(el) => getPizzasContainerRef(el)}>
        <S.PizzasSection>{pizzaSection}</S.PizzasSection>
        <S.Cart>{cart}</S.Cart>
      </S.PizzasContent>
      {floatingCart && <S.FloatingCart>{floatingCart}</S.FloatingCart>}
    </S.MainTemplate>
  );
};

export default MainTemplate;
