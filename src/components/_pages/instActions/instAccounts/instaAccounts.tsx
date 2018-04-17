import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../../_atoms/_material/headline/headline';
import {IInstAccountsProps} from './interface';
import {selectInstAccountsStateProps} from './selector';
import {Paper} from '../../../_atoms/_material/paper/paper';
import Chip from 'material-ui/Chip';
import {get} from 'lodash';

class InstAccountsComponent extends React.Component<IInstAccountsProps, {}> {
  public render() {
    const {instAccounts} = this.props;
    return (
      <Paper>
        <Headline>InstAccounts</Headline>
        {instAccounts.map(instAccount => (
          <Chip
            label={get(instAccount, 'instAccountInfo.username') + ' ' + instAccount.status}
            style={{marginRight: 10}}
          />
        ))}
      </Paper>
    );
  }
}

export const InstAccounts = connect(selectInstAccountsStateProps)(InstAccountsComponent);
