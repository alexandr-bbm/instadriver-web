import {IInstAccountsStore} from '../../../../redux/instAccounts/interface';

export interface IInstAccountsProps extends IInstAccountsStateProps {}

export interface IInstAccountsStateProps {
  instAccounts: IInstAccountsStore;
}
