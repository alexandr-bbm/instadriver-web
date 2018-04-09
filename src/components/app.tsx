import * as React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import { LoginPage } from './_pages/login/login';
import { AllPollsPage } from './_pages/allPolls/allPolls';
import { Register } from './_pages/register/register';
import { IWithDispatch } from '../redux/types';
import { loadInitialAppData } from '../redux/app/actions';
import {MyPollsPage} from './_pages/myPolls/myPolls';
import {MainTemplate} from './common/mainTemplate/mainTemplate';
import {ModalRoot} from './_modals/modalRoot';
import {BASE_URL, RouteFor} from '../utils/routes-config';

class AppComponent extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.dispatch(loadInitialAppData());
  }

  public render() {
    return (
      <Router basename={BASE_URL}>
        <MainTemplate>
          <Switch>
            <Route exact path={RouteFor.Index} component={AllPollsPage} />
            <Route exact path={RouteFor.MyPolls} component={MyPollsPage} />
            <Route exact path={RouteFor.Login} component={LoginPage} />
            <Route exact path={RouteFor.Register} component={Register} />
            <Route render={() => <Redirect to={RouteFor.Index}/>} />
          </Switch>
          <ModalRoot />
        </MainTemplate>
      </Router>
    );
  }
}

export const App = connect(null)(AppComponent);

interface IProps extends IWithDispatch {}
