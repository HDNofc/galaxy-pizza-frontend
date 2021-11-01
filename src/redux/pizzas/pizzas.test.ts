import { clearPizzas, setLoaded, setPizzas } from './action';
import pizzas, { initialState } from './reducer';

import testPizzaArray from './__mocks__';

describe('Redux >> pizzas', () => {
  it('Добавление массива пицц происходит корректно', () => {
    const newState = pizzas(initialState, setPizzas(testPizzaArray));

    expect(newState).toEqual({ items: testPizzaArray, isLoaded: true });
    expect(newState.items.length).toEqual(2);
  });

  it('Очистка массива пицц происходит корректно', () => {
    const newState = pizzas({ ...initialState, items: testPizzaArray }, clearPizzas());

    expect(newState.items.length).toEqual(0);
  });

  it('Установка флага `isLoaded` происходит корректно', () => {
    let newState = pizzas(initialState, setLoaded(true));
    expect(newState.isLoaded).toEqual(true);

    newState = pizzas(initialState, setLoaded(false));
    expect(newState.isLoaded).toEqual(false);
  });
});
