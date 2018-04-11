import {IStore} from '../../../redux/types';
import {getIsAuthenticated} from '../../../redux/user/selector';
import {IInstAccountsStateProps} from './interface';

export const selectInstAccountsStateProps = (state: IStore): IInstAccountsStateProps => ({
  ...getIsAuthenticated(state),
});
