import { IPizzaCrustTypes, IPizzaDoughTypes } from 'redux/store/types';

export interface PizzaCartItem {
  _dbId: string;
  cartId: string;
  name: string;
  description: string;
  price: number;
  dough: IPizzaDoughTypes;
  crust: IPizzaCrustTypes;
  size: number;
  imageUrl?: {
    crop: {
      jpg: string;
      webp: string;
    };
    full: {
      jpg: string;
      webp: string;
    };
  };
  amount: number;
}

export interface PizzaCartState {
  items: PizzaCartItem[];
  totalPrice: number;
  totalCount: number;
}
