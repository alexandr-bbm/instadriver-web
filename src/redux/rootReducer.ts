import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IStore } from './types';
import {userReducer} from './user/reducer';
import { modalsReducer } from './modals/reducer';

export const rootReducer = combineReducers<IStore>({
  user: userReducer,
  modals: modalsReducer,
  form: formReducer,
});
