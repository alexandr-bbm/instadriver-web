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
    <span className={classNames(classes.button, className)}>
      <MaterialButton
        variant={variant || 'raised'}
        {...{
          color,
          disabled,
          type,
          onClick,
        }}
      >
        {content}
        {icon && <Icon className={classes.rightIcon}>{icon}</Icon>}
      </MaterialButton>
      {isLoading &&
        <CircularProgress size={24} className={classes.loader} />
      }
    </span>
  );
};

type ButtonWithIconStyleKeys = 'button' | 'rightIcon' | 'loader';

const styles: StyleRulesCallback<ButtonWithIconStyleKeys> = (theme) => ({
  button: {
    position: 'relative',
    marginRight: theme.spacing.unit,
    textDecoration: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

export const Button = withStyles(styles)(ButtonComponent);
