import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { reduxForm } from 'redux-form';
import { Button } from '../../_atoms/_material/button/button';
import { InputField } from '../../_atoms/_material/inputField/inputField';
import { getModalInjectedProps, IModalInjectedProps } from '../modalRoot';
import { IAddInstAccountModalFormData, IAddInstAccountModalOwnProps, IAddInstAccountModalProps } from './interface';
import {ErrorText} from '../../_atoms/_material/errorText/errorText';
import { handleAsyncFormError } from '../../../utils/form/errors';
import { required } from '../../../utils/form/validations';
import {addInstAccount} from '../../../redux/instAccounts/actions';

const {
  DialogActions,
  DialogContent,
  DialogTitle,
} = require('material-ui/Dialog');

class AddInstAccountModalComponent extends React.Component<IAddInstAccountModalProps, {}> {

  public render() {
    const {handleSubmit, submitting, onClose, error, invalid} = this.props;

    return (
      <Dialog
        fullWidth
        {...getModalInjectedProps(this.props)}
      >
        <DialogTitle>Add Account</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <InputField name="instLogin" validate={required} />
            <InputField name="instPassword" type="password" validate={required} />
          </form>
          {error && <ErrorText>{error}</ErrorText>}
        </DialogContent>
        <DialogActions>
          <Button
            content="confirm"
            color="primary"
            onClick={handleSubmit}
            disabled={submitting || invalid}
          />
          <Button content="cancel" onClick={onClose} />
        </DialogActions>
      </Dialog>
    );
  }
}

export const AddInstAccountModal = reduxForm<IAddInstAccountModalFormData, IAddInstAccountModalOwnProps & IModalInjectedProps>({
  form: 'createPoll',
  onSubmit(values, dispatch, props) {
    return dispatch(addInstAccount(values as IAddInstAccountModalFormData))
      .then(props.onClose)
      .catch(handleAsyncFormError);
  },
})(AddInstAccountModalComponent);
