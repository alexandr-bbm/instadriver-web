import {IModalPayload} from '../../../redux/modals/interface';
import {WithStyles} from 'material-ui/styles/withStyles';

export interface IAddPollButtonProps extends IAddPollButtonDispatchProps, WithStyles<AddPollButtonStyleKeys> {}

interface IAddPollButtonDispatchProps {
  openModal(p: IModalPayload): void;
}

export type AddPollButtonStyleKeys = 'addButton';

export interface IAddPollButtonOwnProps {}
