import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import * as store from 'store2';
import { InstadriverApi } from '../services/instadriverApi/instadriverApi';
import {rootReducer} from './rootReducer';
import { IThunkExtraArgument } from './types';
import { BrowserStorage } from '../services/browserStorage/browserStorage';
import * as firebase from "firebase";

export function createReduxStore() {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const storage = new BrowserStorage(store);
  firebase.initializeApp({
    apiKey: "AIzaSyCwaepneHiLH_XHYqLiIvzFYNt9EXOIuGc",
    authDomain: "instadriver-2688d.firebaseapp.com",
    databaseURL: "https://instadriver-2688d.firebaseio.com",
    projectId: "instadriver-2688d",
    storageBucket: "",
    messagingSenderId: "1036497946806"
  });
  const api = new InstadriverApi(firebase);

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
