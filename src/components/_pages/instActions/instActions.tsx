import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../_atoms/_material/headline/headline';
import {IInstActionsProps} from './interface';
import {selectInstActionsStateProps} from './selector';
import {Button} from '../../_atoms/_material/button/button';
import {openModal} from '../../../redux/modals/actions';
import {InstAccounts} from './instAccounts/instaAccounts';
import {Paper} from '../../_atoms/_material/paper/paper';

class InstActionsComponent extends React.Component<IInstActionsProps, {}> {
  public render() {
    const {isAuthenticated} = this.props;

    if (!isAuthenticated) {
      return (<Headline>Login to see all accounts</Headline>);
    }

    return (
      <div>
        <InstAccounts />
        <Paper>
          <Headline>New Action</Headline>
          <Button content="Add post" onClick={this.openAddPostModal}/>
          <Button content="Add account" onClick={this.openAddInstAccountModal} />
        </Paper>
        <Paper>
          <Headline>Actions log</Headline>
          Table
        </Paper>
      </div>
    );
  }

  private openAddInstAccountModal = () => this.props.dispatch(openModal({name: 'AddInstAccount'}));
  private openAddPostModal = () => this.props.dispatch(openModal({name: 'AddPost'}));
}

export const InstActions = connect(selectInstActionsStateProps)(InstActionsComponent);
