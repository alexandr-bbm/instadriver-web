import * as React from 'react';
import { loginUser } from '../../../redux/user/actions';
import { InputField } from '../../_atoms/_material/inputField/inputField';
import { Headline } from '../../_atoms/_material/headline/headline';
import { reduxForm } from 'redux-form';
import { Button } from '../../_atoms/_material/button/button';
import { ErrorText } from '../../_atoms/_material/errorText/errorText';
import { withoutAuthentication } from '../../_hocs/withoutAuthentication';
import {WithReduxForm} from '../../../utils/types';
import {required} from '../../../utils/form/validations';
import {handleAsyncFormError} from '../../../utils/form/errors';

interface IProps {}

interface IFormData {
  username: string;
  password: string;
}

class LoginPageComponent extends React.Component<WithReduxForm<IProps, IFormData>, {}> {

  public render() {
    const {handleSubmit, error, invalid} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Headline>Login</Headline>
        <InputField
          name="username"
          label="Username"
          validate={required}
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          validate={required}
        />
        <Button
          content="send"
          icon="send"
          type="submit"
          color="primary"
          disabled={invalid}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </form>
    );
  }
}

const LoginPageWithForm = reduxForm<IFormData, IProps>({
  form: 'login',
  onSubmit(values, dispatch, props) {
    return dispatch(loginUser(values as IFormData))
      .then(props.reset)
      .catch(handleAsyncFormError);
  },
})(LoginPageComponent);

export const LoginPage = withoutAuthentication(LoginPageWithForm);
