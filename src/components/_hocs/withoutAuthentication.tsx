import * as React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import { IStore } from '../../redux/types';
import { AuthStatus } from '../../redux/user/interface';
import {RouteFor} from '../../utils/routes-config';

interface IStateProps {
  authStatus: AuthStatus;
}

function mapStateToProps({user: {authStatus}}: IStore) {
  return {
    authStatus,
  };
}

export function withoutAuthentication(Component: React.ComponentClass): React.ComponentClass {
  class Wrapper extends React.Component<IStateProps> {
    public render() {
      if (this.props.authStatus === AuthStatus.Authenticated) {
        return <Redirect to={RouteFor.Index} />;
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
