import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { reduxForm } from 'redux-form';
import { Button } from '../../_atoms/_material/button/button';
import { InputField } from '../../_atoms/_material/inputField/inputField';
import { PollOptionsFields } from './components/pollOptionsFields';
import { getModalInjectedProps, IModalInjectedProps } from '../modalRoot';
import { ICreatePollDialogFormData, ICreatePollDialogOwnProps, ICreatePollDialogProps } from './interface';
import {ErrorText} from '../../_atoms/_material/errorText/errorText';
import { handleAsyncFormError } from '../../../utils/form/errors';
import { required } from '../../../utils/form/validations';

const {FieldArray} = require('redux-form');

const {
  DialogActions,
  DialogContent,
  DialogTitle,
} = require('material-ui/Dialog');

class CreatePollDialogComponent extends React.Component<ICreatePollDialogProps, {}> {

  public render() {
    const {handleSubmit, submitting, onClose, error, invalid} = this.props;

    return (
      <Dialog
        fullWidth
        {...getModalInjectedProps(this.props)}
      >
        <DialogTitle>Create Poll</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <InputField name="title" label="Title" validate={required} />
            <FieldArray name="pollOptions" component={PollOptionsFields} />
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

export const CreatePollDialog = reduxForm<ICreatePollDialogFormData, ICreatePollDialogOwnProps & IModalInjectedProps>({
  form: 'createPoll',
  onSubmit(values, dispatch, props) {
    return Promise.resolve()
      .then(props.onClose)
      .catch(handleAsyncFormError);
  },
  initialValues: {
    title: 'What\'s the best value for initial poll title value?',
    pollOptions: [
      {title: 'I don\'t know'},
      {title: 'I know'},
    ],
  },
})(CreatePollDialogComponent);
