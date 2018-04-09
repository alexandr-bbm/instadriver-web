import {IStore} from '../../../redux/types';
import {getIsAuthenticated} from '../../../redux/user/selector';
import {IIsAuthneticated} from '../../../redux/user/interface';

export const selectAppNavigationProps = (state: IStore): IIsAuthneticated => getIsAuthenticated(state);
