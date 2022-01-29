import {AxiosError} from 'axios';
import {CrewMembersConstants} from '../../constants/actions/CrewMembersConstants';
import {CrewMember} from '../../models/CrewMember';

type CrewMembPending = {type: CrewMembersConstants.CREW_MEMB_PENDING};

type CrewMembRejected = {type: CrewMembersConstants.CREW_MEMB_REJECTED; payload: AxiosError};

type CrewMembFulfilled = {type: CrewMembersConstants.CREW_MEMB_FULFILLED; payload: CrewMember[]};

type CrewMemberActions = CrewMembPending | CrewMembFulfilled | CrewMembRejected;

export default CrewMemberActions;
