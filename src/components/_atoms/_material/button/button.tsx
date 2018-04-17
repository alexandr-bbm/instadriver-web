import * as React from 'react';
import MaterialButton from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import classNames = require('classnames');
import { CircularProgress } from 'material-ui/Progress';

type ButtonWithIconProps = {
  content: string | JSX.Element;
  icon?: string;
  color?: 'primary' | 'secondary' | 'inherit';
  variant?: 'raised' | 'fab';
  className?: string;
  type?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?(...args: any[]): any;
} & WithStyles<ButtonWithIconStyleKeys>;

const ButtonComponent = (props: ButtonWithIconProps) => {
  const {classes, content, icon, onClick, color, variant, className, disabled, type, isLoading} = props;
  return (
    <MaterialButton
      className={classNames(classes.button, className)}
      variant={variant || 'raised'}
      {...{
        color,
        onClick,
        disabled,
        type,
      }}
    >
      {isLoading
        ? <CircularProgress size={24} className={classes.loader} />
        : content
      }
      {icon && <Icon className={classes.rightIcon}>{icon}</Icon>}
    </MaterialButton>
  );
};

type ButtonWithIconStyleKeys = 'button' | 'rightIcon';

const styles: StyleRulesCallback<ButtonWithIconStyleKeys> = (theme) => ({
  button: {
    marginRight: theme.spacing.unit,
    textDecoration: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  loader: {
    posi
  }
});

export const Button = withStyles(styles)(ButtonComponent);
