import {AxiosError} from 'axios';
import Config from 'react-native-config';
import {CrewMembersConstants} from '../constants/actions/CrewMembersConstants';
import {CrewMember} from '../models/CrewMember';
import {RootState} from '../reducers/rootReducer';
import mainAxiosInstance from '../services/service';
import CrewMemberActions from '../types/actions/CrewMembersActions';

type GetState = () => RootState;
type ReduxDispatch = (action: CrewMemberActions | ThunkAction) => void;
type ThunkAction = (dispatch: ReduxDispatch, getState: GetState) => Promise<any>;

const getCrewMembersPending = (): CrewMemberActions => ({type: CrewMembersConstants.CREW_MEMB_PENDING});

const getCrewMembersRejected = (payload: AxiosError): CrewMemberActions => ({
  type: CrewMembersConstants.CREW_MEMB_REJECTED,
  payload,
});

const getCrewMembersFulfilled = (payload: CrewMember[]): CrewMemberActions => ({
  type: CrewMembersConstants.CREW_MEMB_FULFILLED,
  payload,
});

export const getCrewMembers = (): ThunkAction => {
  return dispatch => {
    dispatch(getCrewMembersPending());
    return mainAxiosInstance
      .get(Config.REACT_APP_CREW_API)
      .then(res => dispatch(getCrewMembersFulfilled(res.data)))
      .catch(err => dispatch(getCrewMembersRejected(err)));
  };
};
