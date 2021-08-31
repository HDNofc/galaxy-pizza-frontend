import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Dispatch } from 'redux';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { fetchPizzas, fetchPizzasByTaste } from 'redux/pizzas/thunk';

import PizzasSection from 'components/pizzas-section';
import MainLayout from 'components/main-layout';
import Cart from 'components/cart';
import PageLayout from 'components/page-layout';
import PizzaBlockContainer from 'components/pizza-block-container';
import PizzaBlockLoading from 'components/pizza-block-loading';

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

  return (
    <PageLayout>
      <MainLayout>
        <PizzasSection>
          {isLoaded
            ? pizzas.map((pizza) => <PizzaBlockContainer key={pizza._id} pizzaItem={pizza} />)
            : Array(9)
                .fill(0)
                .map((_, index) => <PizzaBlockLoading key={index} />)}
        </PizzasSection>
        <Cart />
      </MainLayout>
    </PageLayout>
  );
};

export default Main;
