import { IStore } from '../../../redux/types';
import {IAppBarStateProps} from './interface';

export function selectAppBarProps({user: {authStatus, data: {email}}}: IStore): IAppBarStateProps {
  return {
    authStatus,
    email,
  };
}
