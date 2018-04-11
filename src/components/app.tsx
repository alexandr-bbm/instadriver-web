import * as React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import { LoginPage } from './_pages/login/login';
import { Register } from './_pages/register/register';
import { IWithDispatch } from '../redux/types';
import {MainTemplate} from './common/mainTemplate/mainTemplate';
import {ModalRoot} from './_modals/modalRoot';
import {BASE_URL, RouteFor} from '../utils/routes-config';
import {listenForAuthStateChange} from '../redux/user/actions';
import {InstActions} from './_pages/instActions/instActions';

class AppComponent extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.dispatch(listenForAuthStateChange());
  }

  public render() {
    return (
      <Router basename={BASE_URL}>
        <MainTemplate>
          <Switch>
            <Route exact path={RouteFor.InstActions} component={InstActions} />
            <Route exact path={RouteFor.Login} component={LoginPage} />
            <Route exact path={RouteFor.Register} component={Register} />
            <Route render={() => <Redirect to={RouteFor.InstActions}/>} />
          </Switch>
          <ModalRoot />
        </MainTemplate>
      </Router>
    );
  }
}

export const App = connect(null)(AppComponent);

interface IProps extends IWithDispatch {}
