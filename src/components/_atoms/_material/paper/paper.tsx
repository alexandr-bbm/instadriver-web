import * as React from 'react';
import { stylePaper } from './style';
import PaperLib from 'material-ui/Paper';

const {withStyles} = require('material-ui/styles');

const PaperComponent = ({children, classes}) => {
  return (
    <PaperLib className={classes.root}>
      {children}
    </PaperLib>
  );
};

export const Paper = withStyles(stylePaper)(PaperComponent);
