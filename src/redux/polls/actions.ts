import typescriptFsa from 'typescript-fsa';

import {ThunkAction} from '../types';
import {IPoll} from './interface';
import {ICreatePollDialogFormData} from '../../components/_modals/createPollDialog/createPollDialog.interface';
import {IVoteRequestData} from '../../services/pollAppApi/interface';
import {defaultErrorHandler} from '../../utils/defaultErrorHandler';

const actionCreator = typescriptFsa('polls');

export const loadPollsAction = actionCreator.async<{}, IPoll[]>('load');

export interface IRemovePollActionPayload {
  pollId: number;
}

export const removePollAction = actionCreator.async<IRemovePollActionPayload, {}>('remove_one');

export const setPollAction = actionCreator<IPoll>('set_one');

export function loadAllPolls(): ThunkAction {
  return (dispatch, _, {api}) => {
    dispatch(loadPollsAction.started({}));
    return api.loadPolls()
      .then(({data}) => dispatch(loadPollsAction.done({result: data, params: {}})))
      .catch(defaultErrorHandler);
  };
}

export function loadAllPollsInBackground(): ThunkAction {
  return (dispatch, _, {api}) => {
    return api.loadPolls()
      .then(({data}) => dispatch(loadPollsAction.done({result: data, params: {}})))
      .catch(defaultErrorHandler);
  };
}

export function createPoll(data: ICreatePollDialogFormData): ThunkAction {
  return (dispatch, _, {api}) => {
    return api.createPoll(data)
      .then(() => dispatch(loadAllPollsInBackground())); // todo not load all polls but recieve push event and update store!
  };
}

export function votePoll(data: IVoteRequestData): ThunkAction {
  return (dispatch, _, {api}) => {
    return api.votePoll(data)
      .then(({data}) => dispatch(setPollAction(data.poll)));
  };
}

export function removePoll(payload: IRemovePollActionPayload): ThunkAction {
  return (dispatch, _, {api}) => {
    dispatch(removePollAction.started(payload));
    return api.removePoll(payload)
      .then(() => dispatch(removePollAction.done({result: {}, params: payload})))
      .catch(defaultErrorHandler);
  };
}
