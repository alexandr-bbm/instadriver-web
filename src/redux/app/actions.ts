import { ThunkAction } from '../types';
import { getCurrentUser } from '../user/actions';
import { loadAllPolls } from '../polls/actions';

export function loadInitialAppData(): ThunkAction {
  return (dispatch, _, {storage}) => {
    const accessToken = storage.getAccessToken();
    if (accessToken) {
      return Promise.all([
        dispatch(getCurrentUser()),
        dispatch(loadAllPolls()),
      ]);
    }
    return dispatch(loadAllPolls());
  };
}
