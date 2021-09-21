import { SetLocationActionInterface, PlanetLocationActionsType } from './contracts/action-types';

export const setPlanetLocation = (payload: string): SetLocationActionInterface => ({
  type: PlanetLocationActionsType.SET_PLANET_LOCATION,
  payload,
});

export type LocationAction = SetLocationActionInterface;
