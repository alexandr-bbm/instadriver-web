import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../_atoms/_material/headline/headline';
import {IInstAccountsProps} from './interface';
import {selectInstAccountsStateProps} from './selector';

class InstAccountsPageComponent extends React.Component<IInstAccountsProps, {}> {
  public render() {
    return (
      <div>
        <Headline>InstaAccounts</Headline>
      </div>
    );
  }
}

export const InstAccountsPage = connect(selectInstAccountsStateProps)(InstAccountsPageComponent);
