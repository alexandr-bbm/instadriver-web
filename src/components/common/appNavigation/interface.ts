import {RouteComponentProps} from 'react-router';
import {WithStyles} from 'material-ui';
import {IIsAuthneticated} from '../../../redux/user/interface';

export interface IAppNavigationProps extends RouteComponentProps<{}>,
  IIsAuthneticated,
  WithStyles<AppNavigationStyleKeys> {}
export interface IAppNavigationOwnProps {}

export type AppNavigationStyleKeys
  = 'root'
  | 'navigationItemSelected'
  | 'navigationItem'
  ;
