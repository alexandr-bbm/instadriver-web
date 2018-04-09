import { isType } from 'typescript-fsa';
import {Reducer} from 'redux';
import {loadPollsAction, removePollAction, setPollAction} from './actions';
import { IPoll, IPollsStore } from './interface';
import {keyBy} from 'lodash';
import {createDefaultWithNetworkStatus, NetworkStatus} from '../../utils/redux/networkStatus';
import {pickId} from '../../utils/pickers';

const defaultPollsStore: IPollsStore = {
  ...createDefaultWithNetworkStatus({}),
  pollsIds: [],
};

export const pollsReducer: Reducer<IPollsStore> = (state = defaultPollsStore, action) => {
  if (isType(action, loadPollsAction.started)) {
    return {
      ...state,
      networkStatus: NetworkStatus.Started,
    };
  }

  if (isType(action, loadPollsAction.done)) {
    const {payload: {result: polls}} = action;
    const normalizedPolls = keyBy<IPoll>(polls, pickId);
    const pollsIds = polls.map(pickId).reverse();
    return {
      data: normalizedPolls,
      pollsIds,
      networkStatus: NetworkStatus.Done,
    };
  }

  if (isType(action, removePollAction.done)) {
    const {payload: {params: {pollId}}} = action;
    const pollsIds = state.pollsIds.slice();
    const pollIdIdx = pollsIds.indexOf(pollId);
    if (pollIdIdx === -1) {
      return state;
    }
    pollsIds.splice(pollIdIdx, 1);
    return {
      ...state,
      pollsIds,
    };
  }

  if (isType(action, setPollAction)) {
    const poll = action.payload;
    return {
      ...state,
      data: {
        ...state.data,
        [poll.id]: poll,
      },
    };
  }

  return state;
};
