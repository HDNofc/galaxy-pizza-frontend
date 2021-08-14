type IImageShape = {
  [key in IPizzaDoughTypes]?: {
    crop: {
      jpg: string;
      webp: string;
    };
    full: {
      jpg: string;
      webp: string;
    };
  };
};

export type IPizzaDoughTypes = 'fat' | 'slim';

export type IPizzaCrustTypes = 'none' | 'cheese' | 'sausage';

export type IPizzaDough = {
  [key in IPizzaCrustTypes]: {
    sizes: number[];
    price: number[];
  };
};

export type IPizzaTypes = {
  [key in IPizzaDoughTypes]?: IPizzaDough;
};

export interface IPizza {
  _id: string;
  name: string;
  description: string;
  imageUrl: IImageShape;
  types: IPizzaTypes;
  hot: boolean;
  vegan: boolean;
}

export interface IPizzasInitialState {
  items: IPizza[];
}
