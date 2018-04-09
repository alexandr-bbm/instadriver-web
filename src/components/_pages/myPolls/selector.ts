import {IStore} from '../../../redux/types';
import {getIsAuthenticated} from '../../../redux/user/selector';
import {selectCurrentUserPollsIds} from '../../../redux/polls/selector';
import {isNetworkStatusLoading} from '../../../utils/redux/networkStatus';

export const selectMyPollsStateProps = (state: IStore) => ({
  pollsLoading: isNetworkStatusLoading(state.polls.networkStatus),
  pollsIds: selectCurrentUserPollsIds(state),
  ...getIsAuthenticated(state),
});
