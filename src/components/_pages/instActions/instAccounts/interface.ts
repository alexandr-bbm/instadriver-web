import {IInstAccountsStore} from '../../../../redux/instAccounts/interface';
import {IWithDispatch} from '../../../../redux/types';

export interface IInstAccountsProps extends IInstAccountsStateProps, IWithDispatch {}

export interface IInstAccountsStateProps {
  instAccounts: IInstAccountsStore;
}
