import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Dispatch } from 'redux';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { fetchPizzas, fetchPizzasByTaste } from 'redux/pizzas/thunk';

import variables from 'styles/variables';

import AppLayout from 'components/app-layout';
import MainLayout from 'layouts/main-layout';

import Cart from 'components/cart';
import PizzaBlockContainer from 'components/pizza-block-container';
import PizzaBlockLoading from 'components/pizza-block-loading';
import PromoCarousel from 'components/promo-carousel';
import Filter from 'components/filter';

import filters from 'constants/filter';
import promoImages from 'constants/promo-carousel';

const Main = () => {
  const params = useParams();
  const dispatch: Dispatch<any> = useAppDispatch(); // TODO Dispatch<any> возможно не нужен

  const pizzas = useAppSelector((state: RootState) => state.pizzas.items);
  const isLoaded = useAppSelector((state: RootState) => state.pizzas.isLoaded);

  useEffect(() => {
    if (Object.entries(params).length === 0) {
      dispatch(fetchPizzas());
    } else {
      dispatch(fetchPizzasByTaste(params));
    }
  }, [dispatch, params]);

  const pizzasContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const getPizzasContainerRef = (ref: HTMLDivElement | null) => {
    if (ref) {
      pizzasContainerRef.current = ref;
    }
  };

  const onFilterItemClick = () => {
    const position =
      pizzasContainerRef.current.offsetTop - Number.parseInt(variables.common.navHeight) - 20;

    if (window.scrollY > position) {
      window.scrollTo(0, position);
    }
  };

  return (
    <AppLayout>
      <MainLayout
        promo={<PromoCarousel items={promoImages} />}
        filter={<Filter onFilterItemClick={onFilterItemClick} items={filters} />}
        cart={<Cart />}
        getPizzasContainerRef={getPizzasContainerRef}
        pizzaSection={
          isLoaded
            ? pizzas.map((pizza) => <PizzaBlockContainer key={pizza._id} pizzaItem={pizza} />)
            : Array(9)
                .fill(0)
                .map((_, index) => <PizzaBlockLoading key={index} />)
        }
      />
    </AppLayout>
  );
};

export default Main;
