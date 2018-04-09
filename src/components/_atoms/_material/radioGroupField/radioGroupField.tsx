import * as React from 'react';
import {Field} from 'redux-form';
import {RadioGroup} from 'material-ui/Radio';
import {WrappedFieldProps} from 'redux-form/lib/Field';

export const RadioGroupFieldInner: React.SFC<WrappedFieldProps> = (props) => {
  const {input, ...rest} = props;
  return (
    <RadioGroup
      {...input}
      {...rest}
      onChange={(event, value) => input.onChange(value)}
    />
  );
};

export const RadioGroupField = (props) => {
  return (
    <Field component={RadioGroupFieldInner} {...props} />
  );
};
