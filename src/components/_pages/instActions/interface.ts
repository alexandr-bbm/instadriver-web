import {IIsAuthneticated} from '../../../redux/user/interface';
import {IWithDispatch} from '../../../redux/types';

export interface IInstActionsProps extends IInstActionsStateProps, IWithDispatch {}

export interface IInstActionsStateProps extends IIsAuthneticated {
}
