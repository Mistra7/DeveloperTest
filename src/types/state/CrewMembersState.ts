import {AxiosError} from 'axios';
import {CrewMember} from '../../models/CrewMember';

export interface CrewMembersState {
  loading: boolean;
  rejected: boolean;
  fulfilled: boolean;
  error?: AxiosError;
  crewMembers: CrewMember[];
}
