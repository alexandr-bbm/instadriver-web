import { WithReduxForm } from '../../../utils/types';

export interface IRegisterOwnProps {}

export interface IRegisterFormData {
  email: string;
  password: string;
}

export interface IRegisterProps extends WithReduxForm<IRegisterOwnProps, IRegisterFormData> {}
