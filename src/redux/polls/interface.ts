import {IUser} from '../user/interface';
import {IWithNetworkStatus} from '../../utils/redux/networkStatus';
import {Dictionary} from '../../utils/types';

export interface IPollsStore extends IWithNetworkStatus<Dictionary<IPoll>> {
  pollsIds: number[];
}

export interface IPoll {
  title: string;
  pollOptions: IPollOption[];
  id: number;
  userId: number;
  user: IUser;
}

export interface IPollOption {
  title: string;
  id: number;
  pollVotes: IPollVote;
}

export interface IPollVote {
  userId: number;
  ipAddress: string;
  pollOptionId: number;
}

export interface IPollResults {
  [pollOptionId: string]: number;
}
