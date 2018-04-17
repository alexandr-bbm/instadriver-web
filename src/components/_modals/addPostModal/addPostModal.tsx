import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import {Field, reduxForm} from 'redux-form';
import {Button} from '../../_atoms/_material/button/button';
import {InputField} from '../../_atoms/_material/inputField/inputField';
import {getModalInjectedProps, IModalInjectedProps} from '../modalRoot';
import {IAddPostModalFormData, IAddPostModalOwnProps, IAddPostModalProps} from './interface';
import {ErrorText} from '../../_atoms/_material/errorText/errorText';
import {required} from '../../../utils/form/validations';
import axios from 'axios';

const {
  DialogActions,
  DialogContent,
  DialogTitle,
} = require('material-ui/Dialog');

/**
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const customFileInput = (field) => {
  delete field.input.value; // <-- just delete the value property
  return <input type="file" id="file" {...field.input} />;
};

class AddPostModalComponent extends React.Component<IAddPostModalProps, {}> {

  public render() {
    const {handleSubmit, submitting, onClose, error, invalid} = this.props;

    return (
      <Dialog
        fullWidth
        {...getModalInjectedProps(this.props)}
      >
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Field
              name="photo"
              type="file"
              component={customFileInput}
            />
            <InputField name="caption" multiline={true} />
          </form>
          {error && <ErrorText>{error}</ErrorText>}
        </DialogContent>
        <DialogActions>
          <Button
            content="confirm"
            color="primary"
            onClick={handleSubmit}
            disabled={submitting || invalid}
            isLoading={submitting}
          />
          <Button content="cancel" onClick={onClose}/>
        </DialogActions>
      </Dialog>
    );
  }
}

export const AddPostModal = reduxForm<IAddPostModalFormData, IAddPostModalOwnProps & IModalInjectedProps>({
  form: 'addPost',
  onSubmit(values, dispatch, props) {
    const data = new FormData();
    data.append('caption', values.caption);
    data.append('photo', values.photo[0]);
    data.append('instAccountId', 'test');
    data.append('userId', 'test');
    axios.post('http://localhost:8888/posts', data)
    // return dispatch(addPost(values as IAddPostModalFormData))
    //   .then(props.onClose)
    //   .catch(handleAsyncFormError);
  },
})(AddPostModalComponent);
