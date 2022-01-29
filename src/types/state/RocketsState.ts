import {AxiosError} from 'axios';
import {Rocket} from '../../models/Rocket';

export interface RocketsState {
  loading: boolean;
  rejected: boolean;
  fulfilled: boolean;
  error?: AxiosError;
  rockets: Rocket[];
}
