import axios, {AxiosInstance} from 'axios';
import {
  ILoginUserRequestData,
  IRegisterUserRequestData,
} from './interface';
import {API_URL} from '../../utils/routes-config';
import {FireBase} from '../../redux/types';
import * as firebase from 'firebase';
import {InstAccount} from './model';
import {values} from 'lodash';
import {defaultErrorHandler} from '../../utils/defaultErrorHandler';

export class InstadriverApi {

  private axios: AxiosInstance;
  private firebase: FireBase;
  private db: firebase.database.Database;

  private readonly rootPath = 'instagram';

  public constructor(firebase: FireBase) {
    this.firebase = firebase;
    this.db = firebase.database();
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 60000,
    });
  }

  public loginUser(data: ILoginUserRequestData) {
    const {email, password} = data;
    return this.firebase.auth().signInWithEmailAndPassword(email, password);
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
}
