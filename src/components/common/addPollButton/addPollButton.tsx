import * as React from 'react';
import AddIcon from 'material-ui-icons/Add';
import {connect} from 'react-redux';

import { Button } from '../../_atoms/_material/button/button';
import { openModal } from '../../../redux/modals/actions';
import {IAddPollButtonOwnProps, IAddPollButtonProps} from './interface';
import {addPollButtonStyle} from './style';
import {compose} from 'redux';
import withStyles from 'material-ui/styles/withStyles';

class AddPollButtonComponent extends React.Component<IAddPollButtonProps> {

  public render() {
    const {classes} = this.props;

    return (
      <Button
        content={<AddIcon/>}
        className={classes.addButton}
        variant="fab"
        color="primary"
        onClick={this.openCreatePollDialog}
      />
    );
  }

  private openCreatePollDialog = () => {
    this.props.openModal({
      name: 'CreatePoll',
      props: {},
    });
  }
}

export const AddPollButton = compose(
  connect(null, {openModal}),
  withStyles(addPollButtonStyle),
)(AddPollButtonComponent) as React.ComponentClass<IAddPollButtonOwnProps>;
