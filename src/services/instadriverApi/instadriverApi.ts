import axios, {AxiosInstance} from 'axios';
import {
  ILoginUserRequestData,
  IRegisterUserRequestData,
} from './interface';
import {API_URL} from '../../utils/routes-config';
import {FireBase} from '../../redux/types';
import * as firebase from 'firebase';
import {InstAccount, InstAccountBase} from './model';
import {values} from 'lodash';

export class InstadriverApi {

  private axios: AxiosInstance;
  private firebase: FireBase;
  private db: firebase.database.Database;

  public constructor(firebase: FireBase) {
    this.firebase = firebase;
    this.db = firebase.database();
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 5000,
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

  public addInstAccount(payload: InstAccountBase & {userId: string}) {
    const {userId} = payload;
    const newInstAccountRef = this.db.ref(`instAccounts/${userId}`).push();
    return newInstAccountRef.set(payload); // todo should be done in backend after account verification
  }

  public subscribeOnInstAccounts(
    payload: {userId: string},
    listener: (instAccounts: InstAccount[]) => void,
  ) {
    const {userId} = payload;
    const userInstAccountsRef = this.db.ref(`instAccounts/${userId}`);
    userInstAccountsRef.on('value', snapshot => listener(values(snapshot.val())));
  }
}
