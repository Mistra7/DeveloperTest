import {CrewMembersConstants} from '../constants/actions/CrewMembersConstants';
import CrewMembersActions from '../types/actions/CrewMembersActions';
import {CrewMembersState} from '../types/state/CrewMembersState';

const initialState: CrewMembersState = {
  loading: false,
  rejected: false,
  fulfilled: false,
  crewMembers: [],
};

const CrewMembersReducer = (state = initialState, action: CrewMembersActions): CrewMembersState => {
  switch (action.type) {
    case CrewMembersConstants.CREW_MEMB_PENDING:
      return {...state, loading: true, rejected: false, fulfilled: false, error: undefined};
    case CrewMembersConstants.CREW_MEMB_REJECTED:
      return {...state, loading: false, rejected: true, error: action.payload};
    case CrewMembersConstants.CREW_MEMB_FULFILLED:
      return {...state, loading: false, fulfilled: true, crewMembers: action.payload};
    default:
      return state;
  }
};

export default CrewMembersReducer;
