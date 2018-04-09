import * as React from 'react';
import { AppBar } from '../appBar/appBar';
import {withStyles} from 'material-ui/styles';
import { styleMainTemplate } from './style';
import {IMainTemplateProps} from './interface';

export const MainTemplate = withStyles(styleMainTemplate)(
  class extends React.Component<IMainTemplateProps> {
    public render() {
      const {children, classes} = this.props;
      return (
        <div className={classes.root}>
          <AppBar />
          <div className={classes.content}>
            {children}
          </div>
        </div>
      );
    }
  },
);
