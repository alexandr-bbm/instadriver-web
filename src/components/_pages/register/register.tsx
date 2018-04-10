import * as React from 'react';
import { Redirect } from 'react-router';
import {reduxForm} from 'redux-form';

import {InputField} from '../../_atoms/_material/inputField/inputField';
import {Button} from '../../_atoms/_material/button/button';
import {registerUser} from '../../../redux/user/actions';
import { ErrorText } from '../../_atoms/_material/errorText/errorText';
import { Headline } from '../../_atoms/_material/headline/headline';
import { withoutAuthentication } from '../../_hocs/withoutAuthentication';
import { IRegisterFormData, IRegisterOwnProps, IRegisterProps } from './interface';
import { required } from '../../../utils/form/validations';
import { handleAsyncFormError } from '../../../utils/form/errors';
import {RouteFor} from '../../../utils/routes-config';

export class RegisterComponent extends React.Component<IRegisterProps, {}> {
  public render() {
    const {handleSubmit, invalid, error, submitSucceeded} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Headline>Register</Headline>
        <InputField
          name="email"
          label="Email"
          validate={required}
        />
        <InputField
          name="password"
          label="Password"
          type="Password"
          validate={required}
        />
        <Button
          content="send"
          icon="send"
          color="primary"
          disabled={invalid}
          type="submit"
        />
        {submitSucceeded && <Redirect to={RouteFor.Index} />}
        {error && <ErrorText>{error}</ErrorText>}
      </form>
    );
  }
}

const RegisterWithForm = reduxForm<IRegisterFormData, IRegisterOwnProps>({
  form: 'registerUser',
  onSubmit(values, dispatch, props) {
    return dispatch(registerUser(values as IRegisterFormData) as any)
      .then(props.reset)
      .catch(handleAsyncFormError);
  },
})(RegisterComponent);

export const Register = withoutAuthentication(RegisterWithForm);
