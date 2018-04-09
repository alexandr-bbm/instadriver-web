import {IStore} from '../../../redux/types';
import {getIsAuthenticated} from '../../../redux/user/selector';
import {isNetworkStatusLoading} from '../../../utils/redux/networkStatus';
import {IAllPollsStateProps} from './interface';

export const selectAllPollsStateProps = (state: IStore): IAllPollsStateProps => ({
  pollsLoading: isNetworkStatusLoading(state.polls.networkStatus),
  pollsIds: state.polls.pollsIds,
  ...getIsAuthenticated(state),
});
