import * as React from 'react';
import Typography from 'material-ui/Typography';
import { styleErrorText } from './style';

const {withStyles} = require('material-ui/styles');

const ErrorTextComponent = ({children, classes}) => {
  return (
    <Typography variant="body1" color="error" classes={classes}>
      {children || 'Unknown error happened. Please, try again later.'}
    </Typography>
  );
};

export const ErrorText = withStyles(styleErrorText)(ErrorTextComponent);
