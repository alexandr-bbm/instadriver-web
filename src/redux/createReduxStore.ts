import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import * as store from 'store2';
import {InstadriverApi} from '../services/instadriverApi/instadriverApi';
import {rootReducer} from './rootReducer';
import {IThunkExtraArgument} from './types';
import {BrowserStorage} from '../services/browserStorage/browserStorage';
import * as firebase from 'firebase';

export function createReduxStore() {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const storage = new BrowserStorage(store);
  firebase.initializeApp(CONFIG.fireBaseClientConfig);
  const api = new InstadriverApi(firebase, storage);

  const thunkExtraArgument: IThunkExtraArgument = {
    api,
    storage,
    firebase,
  };
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument(thunkExtraArgument),
      ),
    ),
  );
}
