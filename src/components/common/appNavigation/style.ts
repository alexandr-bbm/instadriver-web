import { StyleRulesCallback } from 'material-ui/styles/withStyles';
import { AppNavigationStyleKeys } from './interface';

export const styleAppNavigation: StyleRulesCallback<AppNavigationStyleKeys> = (theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
  },
  navigationItemSelected: {
    color: `${theme.palette.action.active} !important`,
    cursor: 'default',
  },
  navigationItem: {
    color: theme.palette.background.default,
  },
});
