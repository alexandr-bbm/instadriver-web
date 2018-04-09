import { IPoll, IPollResults, IPollVote } from './interface';
import {flatten, groupBy, mapValues, keyBy} from 'lodash';
import {IUser} from '../user/interface';

export const getPollVotes = (poll: IPoll): IPollVote[] => {
  return flatten(poll.pollOptions.map(pollOption => pollOption.pollVotes));
};

export const getPollResults = (poll: IPoll): IPollResults => {
  const votes = getPollVotes(poll);
  const pollOptionsById = keyBy(poll.pollOptions, pollOption => pollOption.id);
  const votesByPollOptionId = groupBy(votes, vote => vote.pollOptionId);
  const votesCountByPollOptionId = mapValues(pollOptionsById,
    (value, key) => votesByPollOptionId[key] ? votesByPollOptionId[key].length : 0,
  );
  return votesCountByPollOptionId;
};

export const getUserVoteForPoll = (poll: IPoll, user: IUser) => {
  const pollVotes = getPollVotes(poll);
  return pollVotes.find(vote => vote.userId === user.id);
};
