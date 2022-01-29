import {combineReducers} from 'redux';
import CrewMembersReducer from './CrewMembersReducer';
import RocketsReducer from './RocketsReducer';

const rootReducer = combineReducers({
  rockets: RocketsReducer,
  crew: CrewMembersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
