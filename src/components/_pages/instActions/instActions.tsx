import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../_atoms/_material/headline/headline';
import {IInstActionsProps} from './interface';
import {selectInstActionsStateProps} from './selector';
import {Button} from '../../_atoms/_material/button/button';
import Paper from 'material-ui/Paper';
import {openModal} from '../../../redux/modals/actions';
import {InstAccounts} from './instAccounts/instaAccounts';

class InstActionsComponent extends React.Component<IInstActionsProps, {}> {
  public render() {
    return (
      <div>
        <InstAccounts />
        <Paper>
          <Headline>New Action</Headline>
          <Button content="Add post" />
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
}

export const InstActions = connect(selectInstActionsStateProps)(InstActionsComponent);
