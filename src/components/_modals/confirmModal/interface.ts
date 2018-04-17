import {IModalInjectedProps} from '../modalRoot';
import {NetworkStatus} from '../../../utils/redux/networkStatus';

export interface IConfirmModalOwnProps {
  title: string;
  message: string;
  onSubmit: () => Promise<any>;
}

export interface IConfirmModalProps extends IConfirmModalOwnProps, IModalInjectedProps {}

export interface IConfirmModalState {
  networkStatus: NetworkStatus;
}
