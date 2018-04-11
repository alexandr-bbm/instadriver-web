import { isType } from 'typescript-fsa';
import {Reducer} from 'redux';
import { IInstAccountsStore } from './interface';
import {setInstAccounts} from './actions';

const defaultInstAccountsStore = [];

export const instAccountsReducer: Reducer<IInstAccountsStore> = (state = defaultInstAccountsStore, action) => {
  if (isType(action, setInstAccounts)) {
    return action.payload || [];
  }
  return state;
};
