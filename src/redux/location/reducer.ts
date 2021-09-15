import { defaultPlanet } from 'constants/planets-delivery-rating';
import { LocationAction } from './action';
import { LocationActionsType } from './contracts/action-types';
import { ILocation } from './contracts/state';

const initialState: ILocation = {
  location: defaultPlanet,
};

const location = (state = initialState, action: LocationAction): ILocation => {
  switch (action.type) {
    case LocationActionsType.SET_LOCATION: {
      return {
        location: action.payload,
      };
    }

    default:
      return state;
  }
};

export default location;
