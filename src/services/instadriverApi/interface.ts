import { ICreatePollDialogFormData } from '../../components/_modals/createPollDialog/createPollDialog.interface';
import { IUser } from '../../redux/user/interface';
import {IPoll} from '../../redux/polls/interface';

export interface ILoginUserRequestData {
  email: string;
  password: string;
}

export interface IRegisterUserRequestData extends ILoginUserRequestData {}

export interface ILoginUserResponseData {
  id: string;
  ttl: number;
  created: string;
  userId: number;
  user: {
    email: string;
    username: string;
  };
}

export interface IRegisterUserResponseData {
  email: string;
  id: number;
}

export interface ILogoutUserData {
  accessToken: string;
}

export interface IGetUserRequest {
  userId: number;
}

export interface ICreatePollRequestData extends ICreatePollDialogFormData {}

export interface IUpdatePollRequestData extends ICreatePollDialogFormData {
  pollId: number;
}

export interface ICurrentUserResponse {
  user: IUser;
}

export interface IVoteRequestData {
 pollOptionId: number;
}

export interface IVoteResponseData {
  poll: IPoll;
}
