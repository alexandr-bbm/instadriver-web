import { isType } from 'typescript-fsa';
import {Reducer} from 'redux';
import { IInstAccountsStore } from './interface';
import {setInstAccount} from './actions';

const defaultInstAccountsStore = {};

export const instAccountsReducer: Reducer<IInstAccountsStore> = (state = defaultInstAccountsStore, action) => {
  if (isType(action, setInstAccount)) {
    const account = action.payload;
    return {
      ...state,
      [account.id]: account,
    };
  }
  return state;
};
