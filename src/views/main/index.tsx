import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { RootState } from 'redux/store/store';
import { fetchPizzas } from 'redux/actions/pizzas';

import PizzasLayout from 'components/pizzas-layout';
import MainLayout from 'components/main-layout/index';

const Main = () => {
  const items = useAppSelector((state: RootState) => {
    return state.pizzas.items;
  });

  const dispatch: Dispatch<any> = useAppDispatch(); // TODO Dispatch<any> возможно не нужен

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return <MainLayout>{items && <PizzasLayout pizzas={items} />}</MainLayout>;
};

export default Main;