import { PizzaCartItem, PizzaCartState } from 'redux/cart/contracts/state';

const getIndexEqualPizza = (
  pizzaObj: PizzaCartItem,
  pizzas: PizzaCartState['items']
): number | null => {
  let pizzaEqualIndex = null;

  pizzas.forEach((pizzaItem, index) => {
    if (
      pizzaItem._dbId === pizzaObj._dbId &&
      pizzaItem.crust === pizzaObj.crust &&
      pizzaItem.dough === pizzaObj.dough &&
      pizzaItem.price === pizzaObj.price &&
      pizzaItem.size === pizzaObj.size
    ) {
      pizzaEqualIndex = index;
    }
  });

  return pizzaEqualIndex;
};

export default getIndexEqualPizza;
