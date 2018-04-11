import {IStore} from '../../../../redux/types';
import {IInstAccountsStateProps} from './interface';

export const selectInstAccountsStateProps = (state: IStore): IInstAccountsStateProps => ({
  instAccounts: state.instAccounts,
});
