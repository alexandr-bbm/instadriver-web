import { WithReduxForm } from '../../../utils/types';

export interface IRegisterOwnProps {}

export interface IRegisterFormData {
  username: string;
  email: string;
  password: string;
}

export interface IRegisterProps extends WithReduxForm<IRegisterOwnProps, IRegisterFormData> {}
