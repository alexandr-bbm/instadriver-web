import * as React from 'react';
import AppBarLib from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Button } from '../../_atoms/_material/button/button';
import { RouterLink } from '../../_atoms/routerLink/routerLink';
import { connect } from 'react-redux';
import { AuthStatus } from '../../../redux/user/interface';
import { logoutUser } from '../../../redux/user/actions';
import { selectAppBarProps } from './selector';
import {IAppBarOwnProps, IAppBarProps} from './interface';
import {compose} from 'redux';
import withStyles from 'material-ui/styles/withStyles';
import {styleAppBar} from './style';
import {AppNavigation} from '../appNavigation/appNavigation';
import {withRouter} from 'react-router';
import {RouteFor} from '../../../utils/routes-config';

class AppBarComponent extends React.Component<IAppBarProps> {
  public render() {
    const { classes } = this.props;

    return (
      <AppBarLib position="static">
        <Toolbar className={classes.root}>
          <Typography variant="title" color="inherit" noWrap>
            Demo app
          </Typography>
          <div className={classes.navigation}>
            <AppNavigation />
          </div>
          <div className={classes.userButtons}>
            {this.renderUserButtons()}
          </div>
        </Toolbar>
      </AppBarLib>
    );
  }

  private renderUserButtons = () => {
    const { authStatus, email } = this.props;
    const isAuthenticated = authStatus === AuthStatus.Authenticated;
    if (isAuthenticated) {
      return (
        <React.Fragment>
          <div style={{marginRight: 10}}>
            <Typography variant="subheading">
              {email}
            </Typography>
          </div>
          <Button
            color="inherit"
            content="Logout"
            onClick={this.props.logoutUser}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <RouterLink to={RouteFor.Login}>
          <Button color="inherit" content="Login" />
        </RouterLink>
        <RouterLink to={RouteFor.Register}>
          <Button color="inherit" content="Register" />
        </RouterLink>
      </React.Fragment>
    );
  }
}

export const AppBar = compose(
  withRouter,
  connect(selectAppBarProps, {logoutUser}),
  withStyles(styleAppBar),
)(AppBarComponent) as React.ComponentType<IAppBarOwnProps>;
