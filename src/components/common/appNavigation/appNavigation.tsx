import * as React from 'react';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import {IAppNavigationOwnProps, IAppNavigationProps} from './interface';
import {compose} from 'redux';
import withStyles from 'material-ui/styles/withStyles';
import {styleAppNavigation} from './style';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {selectAppNavigationProps} from './selector';
import {RouteFor} from '../../../utils/routes-config';

class AppNavigationComponent extends React.Component<IAppNavigationProps> {
  public render() {
    const { classes, location: {pathname}, isAuthenticated } = this.props;

    const navigationItemClasses = {
      root: classes.navigationItem,
      selected: classes.navigationItemSelected,
    };

    if (!isAuthenticated) {
      return null;
    }

    return (
      <BottomNavigation
        value={pathname}
        showLabels
        className={classes.root}
        onChange={this.onChange}
      >
        {/*<BottomNavigationAction*/}
          {/*label="Accounts"*/}
          {/*icon={<RestoreIcon />}*/}
          {/*value={RouteFor.Index}*/}
          {/*classes={navigationItemClasses}*/}
        {/*/>*/}
        <BottomNavigationAction
          label="Actions"
          icon={<FavoriteIcon />}
          value={RouteFor.InstActions}
          classes={navigationItemClasses}
        />
      </BottomNavigation>
    );
  }

  private onChange = (event, value) => {
    this.props.history.push(value);
  }
}

export const AppNavigation = compose(
  withRouter,
  connect(selectAppNavigationProps),
  withStyles(styleAppNavigation),
)(AppNavigationComponent) as React.ComponentType<IAppNavigationOwnProps>;
