import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../_atoms/_material/button/button';
import { logoutUser } from '../../../redux/user/actions';

interface IStateProps {
}

interface IDispatchProps {
  logout: typeof logoutUser;
}

interface IProps extends IStateProps, IDispatchProps {}

class ProfilePageComponent extends React.Component<IProps> {
  public render() {
    const {logout} = this.props;
    return (
      <div>
        Content for Authenticated
        <Button onClick={logout} content="Logout" />
      </div>
    );
  }
}

export const ProfilePage = connect(null, {logout: logoutUser})(ProfilePageComponent);
