import {InstAccount} from '../../services/instadriverApi/model';

export interface IInstAccountsStore {
  [instAccountId: string]: InstAccount
}
