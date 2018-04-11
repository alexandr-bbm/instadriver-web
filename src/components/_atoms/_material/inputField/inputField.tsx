import * as React from 'react';
import {Field} from 'redux-form';
import MaterialInputField, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import {WrappedFieldProps} from 'redux-form/lib/Field';
import {upperFirst} from 'lodash';

const InputFieldComponentInner: React.SFC<WrappedFieldProps & {label?: string}> = (props) => {
  const id = String(Math.random());
  const {label, input, meta: {touched, error}} = props;
  const hasError = Boolean(touched && error);
  return (
    <FormControl
      fullWidth
      error={hasError}
      margin="normal"
    >
      <InputLabel htmlFor={id}>{label || upperFirst(input.name)}</InputLabel>
      <MaterialInputField {...props} {...input} id={id}/>
      {hasError && <FormHelperText id={id}>{error}</FormHelperText>}
    </FormControl>
  );
};

export const InputField  = (props) => {
  return <Field component={InputFieldComponentInner} {...props} />;
};
