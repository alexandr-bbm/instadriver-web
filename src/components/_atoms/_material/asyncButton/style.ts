import {StyleRulesCallback} from 'material-ui/styles/withStyles';

type StyleKeys = 'buttonProgress';

export const styleAsyncButton: StyleRulesCallback<StyleKeys> = (theme) => ({
  buttonProgress: {
    marginRight: theme.spacing.unit,
    textDecoration: 'none',

  },
});
