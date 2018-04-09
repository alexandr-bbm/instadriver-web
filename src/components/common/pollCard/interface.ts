import {removePoll} from '../../../redux/polls/actions';
import {IUser} from '../../../redux/user/interface';
import {PollCardStyleKeys} from './style';
import {IPoll, IPollResults } from '../../../redux/polls/interface';
import {WithStyles} from 'material-ui';
import {InjectedFormProps} from 'redux-form/lib/reduxForm';

export type IPollCardProps = IPollCardOwnProps
  & IPollCardStateProps & IPollCardDispatchProps
  & WithStyles<PollCardStyleKeys>
  & InjectedFormProps<IPollCardFormData, IPollCardOwnProps>;

export interface IPollCardOwnProps {
  pollId: number;
  form: string;
}

export interface IPollCardStateProps  {
  poll: IPoll;
  user: IUser;
  alreadyVoted: boolean;
  pollResults: IPollResults;
}

export interface IPollCardFormData  {
  pollOptionId: number;
}

export interface IPollCardDispatchProps {
  removePoll: typeof removePoll;
}
