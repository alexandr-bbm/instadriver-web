import { IModalInjectedProps } from '../modalRoot';
import { WithReduxForm } from '../../../utils/types';

export interface ICreatePollDialogFormData {
  title: string;
  pollOptions: Array<{title: string}>;
}

export interface ICreatePollDialogOwnProps {
  pollId?: number;
}

export interface ICreatePollDialogProps extends
  WithReduxForm<ICreatePollDialogOwnProps & IModalInjectedProps, ICreatePollDialogFormData> {}
