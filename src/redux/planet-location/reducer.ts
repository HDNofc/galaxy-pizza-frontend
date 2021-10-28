import { load } from 'redux-localstorage-simple';

import { defaultPlanet } from 'constants/planets-delivery-rating';
import { LocationAction } from './action';
import { PlanetLocationActionsType } from './contracts/action-types';
import { IPlanetLocation } from './contracts/state';

export const defaultState: IPlanetLocation = {
  planetLocation: defaultPlanet,
};

const savedPlanetLocation: any = load({
  namespace: 'planetLocation',
  states: ['planetLocation'],
});
const initialState: IPlanetLocation =
  savedPlanetLocation && savedPlanetLocation.planetLocation
    ? savedPlanetLocation.planetLocation
    : defaultState;

const planetLocation = (state = initialState, action: LocationAction): IPlanetLocation => {
  switch (action.type) {
    case PlanetLocationActionsType.SET_PLANET_LOCATION: {
      return {
        planetLocation: action.payload,
      };
    }

    default:
      return state;
  }
};

export default planetLocation;
