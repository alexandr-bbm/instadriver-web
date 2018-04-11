import {IStore} from '../../../redux/types';
import {getIsAuthenticated} from '../../../redux/user/selector';
import {IInstActionsStateProps} from './interface';

export const selectInstActionsStateProps = (state: IStore): IInstActionsStateProps => ({
  ...getIsAuthenticated(state),
});
