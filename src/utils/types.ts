import { InjectedFormProps } from 'redux-form/lib/reduxForm';

export type WithReduxForm<OwnProps, FormData> = OwnProps & InjectedFormProps<FormData, OwnProps>;

export type Dictionary<T> = {} & {
  [Key: string]: T;
};
