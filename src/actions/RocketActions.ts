import {AxiosError} from 'axios';
import Config from 'react-native-config';
import {RocketsConstants} from '../constants/actions/RocketsConstants';
import {Rocket} from '../models/Rocket';
import {RootState} from '../reducers/rootReducer';
import mainAxiosInstance from '../services/service';
import RocketsActions from '../types/actions/RocketsActions';

type GetState = () => RootState;
type ReduxDispatch = (action: RocketsActions | ThunkAction) => void;
type ThunkAction = (dispatch: ReduxDispatch, getState: GetState) => Promise<any>;

const getRocketsPending = (): RocketsActions => ({type: RocketsConstants.ROCKETS_PENDING});

const getRocketsRejected = (payload: AxiosError): RocketsActions => ({
  type: RocketsConstants.ROCKETS_REJECTED,
  payload,
});

const getRocketsFulfilled = (payload: Rocket[]): RocketsActions => ({
  type: RocketsConstants.ROCKETS_FULFILLED,
  payload,
});

export const popUpShowed = (): RocketsActions => ({type: RocketsConstants.OPEN_FULL_IMAGE_SHOWED});

export const getRockets = (): ThunkAction => {
  return dispatch => {
    dispatch(getRocketsPending());
    return mainAxiosInstance
      .get(Config.REACT_APP_ROCKETS_API)
      .then(res => dispatch(getRocketsFulfilled(res.data)))
      .catch(err => dispatch(getRocketsRejected(err)));
  };
};
