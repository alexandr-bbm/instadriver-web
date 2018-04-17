import * as React from 'react';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import withStyles from 'material-ui/styles/withStyles';
import {styleAsyncButton} from './style';

const AsyncButtonComponent = (props) => {
  return (
    <React.Fragment>
      <Button {...props} />
      {props.loading && <CircularProgress size={24} className={props.classes.buttonProgress} />}
    </React.Fragment>
  );
};

export const AsyncButton = withStyles(styleAsyncButton)(AsyncButtonComponent);
