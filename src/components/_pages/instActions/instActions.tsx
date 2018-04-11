import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../_atoms/_material/headline/headline';
import {IInstActionsProps} from './interface';
import {selectInstActionsStateProps} from './selector';
import {Button} from '../../_atoms/_material/button/button';
import Paper from 'material-ui/Paper';

class InstActionsComponent extends React.Component<IInstActionsProps, {}> {
  public render() {

    return (
      <div>
        <Paper>
          <Headline>New Action</Headline>
          <Button content="Add post" />
          <Button content="Add account" />
        </Paper>
        <Paper>
          <Headline>Actions log</Headline>
          Table
        </Paper>
      </div>
    );
  }
}

export const InstActions = connect(selectInstActionsStateProps)(InstActionsComponent);
