import {IStore} from '../../../redux/types';
import {MapStateToProps} from 'react-redux';
import {IPollCardOwnProps, IPollCardStateProps} from './interface';
import { getUserVoteForPoll, getPollResults } from '../../../redux/polls/helper';

export const selectPollCardProps: MapStateToProps<IPollCardStateProps, IPollCardOwnProps, IStore> =
  (state, ownProps) => {
  const poll = state.polls.data[ownProps.pollId];
  const user = state.user.data;
  const userVoteForPoll = getUserVoteForPoll(poll, user);
  const pollResults = getPollResults(poll);

  return {
    poll,
    user,
    alreadyVoted: Boolean(userVoteForPoll),
    pollResults,

    initialValues: {
      pollOptionId: userVoteForPoll ? userVoteForPoll.pollOptionId : '',
    },
  };
};
