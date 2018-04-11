import axios, {AxiosInstance} from 'axios';
import {
  ILoginUserRequestData,
  IRegisterUserRequestData,
} from './interface';
import {API_URL} from '../../utils/routes-config';
import {FireBase} from '../../redux/types';

export class InstadriverApi {

  private axios: AxiosInstance;
  private firebase: FireBase;

  public constructor(firebase: FireBase) {
    this.firebase = firebase;
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
}
