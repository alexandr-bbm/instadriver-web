import { IStore } from '../types';
import { AuthStatus, IIsAuthneticated } from './interface';

export function getIsAuthenticated(state: IStore): IIsAuthneticated {
  return {isAuthenticated: state.user.authStatus === AuthStatus.Authenticated};
}
