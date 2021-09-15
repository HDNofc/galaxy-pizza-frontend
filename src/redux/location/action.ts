import { SetLocationActionInterface, LocationActionsType } from './contracts/action-types';

export const setLocation = (payload: string): SetLocationActionInterface => ({
  type: LocationActionsType.SET_LOCATION,
  payload,
});

export type LocationAction = SetLocationActionInterface;
