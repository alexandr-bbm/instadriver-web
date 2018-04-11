import { DispatchProp } from 'react-redux';
import { IUserStore } from './user/interface';
import { IModalsStore } from './modals/interface';
import { InstadriverApi } from '../services/instadriverApi/instadriverApi';
import { BrowserStorage } from '../services/browserStorage/browserStorage';
import { ThunkAction as ThunkActionCommon } from 'redux-thunk';
import * as firebase from 'firebase';

export interface IStore {
  user: IUserStore;
  modals: IModalsStore;
}

export type FireBase = typeof firebase;

export interface IThunkExtraArgument {
  api: InstadriverApi;
  storage: BrowserStorage;
  firebase: FireBase;
}

export type ThunkAction = ThunkActionCommon<Promise<any>, IStore, IThunkExtraArgument>;

export interface IWithDispatch extends DispatchProp<IStore> {}
