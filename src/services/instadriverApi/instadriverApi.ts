import axios, {AxiosInstance} from 'axios';
import {
  ILoginUserRequestData,
  IRegisterUserRequestData,
} from './interface';
import {FireBase} from '../../redux/types';
import * as firebase from 'firebase';
import {InstAccount} from './model';
import {values} from 'lodash';
import {defaultErrorHandler} from '../../utils/defaultErrorHandler';
import {BrowserStorage} from '../browserStorage/browserStorage';

export class InstadriverApi {

  private axios: AxiosInstance;
  private firebase: FireBase;
  private db: firebase.database.Database;
  private storage: BrowserStorage;

  private readonly rootPath = 'instagram';

  public constructor(firebase: FireBase, storage: BrowserStorage) {
    this.firebase = firebase;
    this.storage = storage;
    this.db = firebase.database();
    this.axios = axios.create({
      baseURL: CONFIG.apiRoot,
    });
    this.setAccessTokenFromStorageIfExists();
  }

  public loginUser(data: ILoginUserRequestData) {
    const {email, password} = data;
    return this.firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.firebase.auth().currentUser.getIdToken(true))
      .then(idToken => {
        this.storage.setAccessToken(idToken);
        this.setAxiosAuthHeader(idToken);
      });
  }

  public logoutUser() {
    return this.firebase.auth().signOut();
  }

  public registerUser(data: IRegisterUserRequestData) {
    const {email, password} = data;
    return this.firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public addInstAccount(payload) {
    const {userId, instLogin, instPassword} = payload;
    return this.axios.post('accounts', {
      instLogin,
      instPassword,
      userId,
    });
  }

  public deleteInstAccount(payload) {
    const {userId, instAccountId} = payload;
    return this.axios.delete('accounts', {
      data: {
        instAccountId,
        userId,
      },
    });
  }

  public addInstPost(data: FormData) {
    return this.axios.post('posts', data);
  }

  public subscribeOnInstAccounts(payload: { userId: string },
                                 subscriber: (instAccounts: InstAccount[]) => void) {
    const {userId} = payload;
    const userInstAccountsRef = this.db.ref(`${this.rootPath}/instAccounts/${userId}`);
    userInstAccountsRef.on('value', snapshot => subscriber(values(snapshot.val())), defaultErrorHandler);
  }

  public clearAccessToken() {
    this.storage.setAccessToken(undefined);
    this.setAxiosAuthHeader(undefined);
  }

  private setAxiosAuthHeader(accessToken: string) {
    this.axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  private setAccessTokenFromStorageIfExists() {
    const accessToken = this.storage.getAccessToken();
    if (accessToken) {
      this.setAxiosAuthHeader(accessToken);
    }
  }
}
