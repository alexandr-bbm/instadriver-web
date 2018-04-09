import { Dispatch, DispatchProp } from 'react-redux';
import { IUserStore } from './user/interface';
import { IPollsStore } from './polls/interface';
import { IModalsStore } from './modals/interface';
import { PollAppApi } from '../services/pollAppApi/pollAppApi';
import { BrowserStorage } from '../services/browserStorage/browserStorage';
import { ThunkAction as ThunkActionCommon } from 'redux-thunk';
import * as firebase from 'firebase';

export interface IStore {
  polls: IPollsStore;
  user: IUserStore;
  modals: IModalsStore;
}

export interface IThunkExtraArgument {
  api: PollAppApi;
  storage: BrowserStorage;
  firebase: typeof firebase,
}

export type ThunkAction = ThunkActionCommon<Promise<any>, IStore, IThunkExtraArgument>;

export interface IWithDispatch extends DispatchProp<IStore> {}
