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

export class PollAppApi {

  private storage: BrowserStorage;
  private axios: AxiosInstance;

  public constructor(store: BrowserStorage) {
    this.storage = store;
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 5000,
    });
    this.setAccessTokenFromStorageIfExists();
  }

  public loginUser(data: ILoginUserRequestData) {
    return this.axios.post<ILoginUserResponseData>(`/appUsers/login?include=user`, data)
      .then((response) => {
        const {data: {id: accessToken}} = response;
        this.storage.setAccessToken(accessToken);
        this.setAuthHeader(accessToken);
        return response;
      });
  }

  public logoutUser() {
    return this.axios.post(`/appUsers/logout`)
      .then((response) => {
        this.clearAccessToken();
        return response;
      });
  }

  public getCurrentUser() {
    return this.axios.get<ICurrentUserResponse>(`/appUsers/currentUser`)
      .catch((err) => {
        if (err.response.status === 401) {
          this.clearAccessToken();
        }
        throw err;
      });
  }

  public registerUser(data: IRegisterUserRequestData) {
    return this.axios.post<IRegisterUserResponseData>(`/appUsers`, data);
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
