import {IStore} from '../types';

// todo add reselect
export const selectCurrentUserPollsIds = (state: IStore): number[] => {
  const {user, polls: {data, pollsIds}} = state;
  return pollsIds
    .map(id => data[id])
    .filter(poll => poll.userId === user.data.id)
    .map(poll => poll.id);
};
