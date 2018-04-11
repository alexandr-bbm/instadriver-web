import {IModalInjectedProps} from '../modalRoot';
import {WithReduxForm} from '../../../utils/types';
import {InstAccountBase} from '../../../services/instadriverApi/model';

export interface IAddInstAccountModalFormData extends InstAccountBase {}

export interface IAddInstAccountModalOwnProps {}

export interface IAddInstAccountModalProps extends WithReduxForm<IAddInstAccountModalOwnProps & IModalInjectedProps, IAddInstAccountModalFormData> {}
