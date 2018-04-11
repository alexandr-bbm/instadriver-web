import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../../_atoms/_material/headline/headline';
import {IInstAccountsProps} from './interface';
import {selectInstAccountsStateProps} from './selector';
import Paper from 'material-ui/Paper';
import {Title} from '../../../_atoms/_material/title/title';

class InstAccountsComponent extends React.Component<IInstAccountsProps, {}> {
  public render() {
    const {instAccounts} = this.props;
    return (
      <Paper>
        <Headline>InstAccounts</Headline>
        {instAccounts.map(instAccount => <Title>{instAccount.nickname}</Title>)}
      </Paper>
    );
  }
}

export const InstAccounts = connect(selectInstAccountsStateProps)(InstAccountsComponent);
