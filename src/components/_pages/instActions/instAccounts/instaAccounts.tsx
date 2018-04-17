import * as React from 'react';
import {connect} from 'react-redux';
import { Headline } from '../../../_atoms/_material/headline/headline';
import {IInstAccountsProps} from './interface';
import {selectInstAccountsStateProps} from './selector';
import {Paper} from '../../../_atoms/_material/paper/paper';
import Chip from 'material-ui/Chip';
import {get} from 'lodash';
import Avatar from 'material-ui/Avatar';
import {deleteInstAccount} from '../../../../redux/instAccounts/actions';
import {openModal} from '../../../../redux/modals/actions';
import Typography from 'material-ui/Typography';

class InstAccountsComponent extends React.Component<IInstAccountsProps, {}> {
  public render() {
    const {instAccounts, dispatch} = this.props;
    return (
      <Paper>
        <Headline>Accounts</Headline>
        {instAccounts.length === 0 && <Typography>No accounts.</Typography>}

        {instAccounts
          .filter(account => account.status === 'ok')
          .map(instAccount => (
          <Chip
            avatar={<Avatar src={get(instAccount, 'instAccountInfo.profilePicUrl')} />}
            label={get(instAccount, 'instAccountInfo.username') + ' ' + instAccount.status}
            style={{marginRight: 10}}
            onDelete={() => dispatch(openModal({
              name: 'Confirm',
              props: {
                title: 'Delete instagram account',
                message: 'This action will delete instagram account from our system. Are you sure?',
                onSubmit: () => dispatch(deleteInstAccount({instAccountId: instAccount.id})),
              },
            }))}
          />
        ))}
      </Paper>
    );
  }
}
//
export const InstAccounts = connect(selectInstAccountsStateProps)(InstAccountsComponent);
