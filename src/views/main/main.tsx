import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { fetchPizzas } from 'redux/pizzas/thunk';

import PizzasSection from 'components/pizzas-section';
import MainLayout from 'components/main-layout/index';
import Cart from 'components/cart';

const Main = () => {
  const dispatch: Dispatch<any> = useAppDispatch(); // TODO Dispatch<any> возможно не нужен

  const items = useAppSelector((state: RootState) => state.pizzas.items);
  const isLoaded = useAppSelector((state: RootState) => state.pizzas.isLoaded);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <MainLayout>
      {isLoaded ? <PizzasSection pizzas={items} /> : <span> Loading...</span>}
      <Cart />
    </MainLayout>
  );
};

export default Main;
