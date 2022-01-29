import {AxiosError} from 'axios';
import {RocketsConstants} from '../../constants/actions/RocketsConstants';
import {Rocket} from '../../models/Rocket';

type RocketsPending = {type: RocketsConstants.ROCKETS_PENDING};

type RocketsRejected = {type: RocketsConstants.ROCKETS_REJECTED; payload: AxiosError};

type RocketsFulfilled = {type: RocketsConstants.ROCKETS_FULFILLED; payload: Rocket[]};

type RocketsActions = RocketsPending | RocketsFulfilled | RocketsRejected;

export default RocketsActions;
