import {AxiosError} from 'axios';
import {RocketsConstants} from '../../constants/actions/RocketsConstants';
import {Rocket} from '../../models/Rocket';

type PopUpShowed = {type: RocketsConstants.OPEN_FULL_IMAGE_SHOWED};

type RocketsPending = {type: RocketsConstants.ROCKETS_PENDING};

type RocketsRejected = {type: RocketsConstants.ROCKETS_REJECTED; payload: AxiosError};

type RocketsFulfilled = {type: RocketsConstants.ROCKETS_FULFILLED; payload: Rocket[]};

type RocketsActions = RocketsPending | RocketsFulfilled | RocketsRejected | PopUpShowed;

export default RocketsActions;
