import {StyleRulesCallback} from 'material-ui/styles/withStyles';

export const stylePaper: StyleRulesCallback<'root'> = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});