import { Action } from 'redux';

export enum LocationActionsType {
  SET_LOCATION = 'location/SET_LOCATION',
}

export interface SetLocationActionInterface extends Action<LocationActionsType> {
  type: LocationActionsType.SET_LOCATION;
  payload: string;
}
