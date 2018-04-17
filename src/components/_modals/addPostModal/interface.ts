import {IModalInjectedProps} from '../modalRoot';
import {WithReduxForm} from '../../../utils/types';
import {InstAccountBase} from '../../../services/instadriverApi/model';

export interface IAddPostModalFormData {
  caption?: string;
  photo: File;
}

export interface IAddPostModalOwnProps {}

export interface IAddPostModalProps extends WithReduxForm<IAddPostModalOwnProps & IModalInjectedProps, IAddPostModalFormData> {}
