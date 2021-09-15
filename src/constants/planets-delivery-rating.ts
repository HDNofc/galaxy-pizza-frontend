export interface IPlanetsDeliveryRating {
  [key: string]: {
    name: string;
    deliveryRating: number;
    time: number;
  };
}

const planetsDeliveryRating: IPlanetsDeliveryRating = {
  mercury: {
    name: 'Меркурий',
    deliveryRating: 3.5,
    time: 16,
  },
  venus: {
    name: 'Венера',
    deliveryRating: 4.6,
    time: 14,
  },
  mars: {
    name: 'Марс',
    deliveryRating: 4.8,
    time: 17,
  },
  jupiter: {
    name: 'Юпитер',
    deliveryRating: 4.5,
    time: 42,
  },
  saturn: {
    name: 'Сатурн',
    deliveryRating: 4.2,
    time: 75,
  },
  uranus: {
    name: 'Уран',
    deliveryRating: 3.8,
    time: 164,
  },
  neptune: {
    name: 'Нептун',
    deliveryRating: 3.5,
    time: 250,
  },
  pluto: {
    name: 'Плутон',
    deliveryRating: 3.1,
    time: 280,
  },
};

export const defaultPlanet = 'mars';

export default planetsDeliveryRating;
