import { AuthStatus } from '../../../redux/user/interface';
import { logoutUser } from '../../../redux/user/actions';
import {WithStyles} from 'material-ui';
import {AppBarStyleKeys} from './style';

export interface IAppBarProps extends IAppBarOwnProps, IAppBarStateProps, IAppBarDispatchProps, WithStyles<AppBarStyleKeys> {}

export interface IAppBarOwnProps {
}

export interface IAppBarStateProps {
  authStatus: AuthStatus;
  email: string;
  username: string;
}

interface IAppBarDispatchProps {
  logoutUser: typeof logoutUser;
}
