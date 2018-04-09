import * as React from 'react';
import { IStore } from '../../redux/types';
import { connect } from 'react-redux';
import { AuthStatus } from '../../redux/user/interface';
import { Redirect } from 'react-router';
import {RouteFor} from '../../utils/routes-config';

interface IStateProps {
  authStatus: AuthStatus;
}

function mapStateToProps({user: {authStatus}}: IStore) {
  return {
    authStatus,
  };
}

export function withAuthentication(Component: React.ComponentClass): React.ComponentClass {
  class Wrapper extends React.Component<IStateProps> {
    public render() {
      if (this.props.authStatus === AuthStatus.NotAuthenticated) {
        return <Redirect to={RouteFor.Login} />;
      }
      const componentProps = {...this.props};
      delete componentProps.authStatus;
      return (
        <Component {...componentProps} />
      );
    }
  }
  return connect(mapStateToProps, {})(Wrapper);
}
