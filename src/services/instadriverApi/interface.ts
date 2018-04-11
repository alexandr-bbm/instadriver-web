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

export interface IVoteRequestData {
 pollOptionId: number;
}
