import {IIsAuthneticated} from '../../../redux/user/interface';

export interface IAllPollsProps extends IAllPollsStateProps {}

export interface IAllPollsStateProps extends IIsAuthneticated {
  pollsLoading: boolean;
  pollsIds: number[];
}
