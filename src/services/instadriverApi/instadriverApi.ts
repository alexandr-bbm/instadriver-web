import axios, {AxiosInstance} from 'axios';
import {
  ICreatePollRequestData, ICurrentUserResponse,
  ILoginUserRequestData, ILoginUserResponseData,
  IRegisterUserRequestData, IRegisterUserResponseData,
  IUpdatePollRequestData, IVoteRequestData, IVoteResponseData,
} from './interface';
import { IRemovePollActionPayload } from '../../redux/polls/actions';
import { BrowserStorage } from '../browserStorage/browserStorage';
import {API_URL} from '../../utils/routes-config';
import {FireBase} from '../../redux/types';

export class InstadriverApi {

  private storage: BrowserStorage;
  private axios: AxiosInstance;
  private firebase: FireBase;

  public constructor(store: BrowserStorage, firebase: FireBase) {
    this.storage = store;
    this.firebase = firebase;
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 5000,
    });
    this.setAccessTokenFromStorageIfExists();
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

  public loadPolls() {
    return this.axios.get(`/polls`);
  }

  public createPoll(data: ICreatePollRequestData) {
    return this.axios.post(`/polls`, data);
  }

  public votePoll(data: IVoteRequestData) {
    return this.axios.post<IVoteResponseData>(`/pollVotes`, data);
  }

  public updatePoll(data: IUpdatePollRequestData) {
    return this.axios.put(`/polls`, data);
  }

  public removePoll(data: IRemovePollActionPayload) {
    return this.axios.delete(`/polls/${data.pollId}`);
  }

  private setAuthHeader(accessToken: string) {
    this.axios.defaults.headers.common.Authorization = accessToken;
  }

  private setAccessTokenFromStorageIfExists() {
    const accessToken = this.storage.getAccessToken();
    if (accessToken) {
      this.setAuthHeader(accessToken);
    }
  }

  private clearAccessToken() {
    this.storage.removeAccessToken();
    this.setAuthHeader(undefined);
  }
}
