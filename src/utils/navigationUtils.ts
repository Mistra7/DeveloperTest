import {AppRoute} from '../navigation/routes';

export const screenNameToIcon = (name: AppRoute): string => {
  switch (name) {
    case AppRoute.CREW_MEMBERS_SCREEN:
      return 'astronaut';
    case AppRoute.ROCKETS_SCREEN:
      return 'rocket';
    default:
      return 'rocket';
  }
};
