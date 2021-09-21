import { Action } from 'redux';

export enum PlanetLocationActionsType {
  SET_PLANET_LOCATION = 'location/SET_PLANET_LOCATION',
}

export interface SetLocationActionInterface extends Action<PlanetLocationActionsType> {
  type: PlanetLocationActionsType.SET_PLANET_LOCATION;
  payload: string;
}
