import {IIsAuthneticated} from '../../../redux/user/interface';

export interface IMyPollsProps extends IMyPollsStateProps {}

export interface IMyPollsStateProps extends IIsAuthneticated {
  pollsLoading: boolean;
  pollsIds: number[];
}
