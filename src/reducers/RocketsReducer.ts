import {RocketsConstants} from '../constants/actions/RocketsConstants';
import RocketsActions from '../types/actions/RocketsActions';
import {RocketsState} from '../types/state/RocketsState';

const initialState: RocketsState = {
  loading: false,
  rejected: false,
  fulfilled: false,
  rockets: [],
  howToShowFullImagePopUpShowed: false,
};

const RocketsReducer = (state = initialState, action: RocketsActions): RocketsState => {
  switch (action.type) {
    case RocketsConstants.ROCKETS_PENDING:
      return {...state, loading: true, rejected: false, fulfilled: false, error: undefined};
    case RocketsConstants.ROCKETS_REJECTED:
      return {...state, loading: false, rejected: true, error: action.payload};
    case RocketsConstants.ROCKETS_FULFILLED:
      return {...state, loading: false, fulfilled: true, rockets: action.payload};
    default:
      return state;
  }
};

export default RocketsReducer;
