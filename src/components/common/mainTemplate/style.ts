import { StyleRulesCallback } from 'material-ui/styles/withStyles';
import { MainTemplateStyleKeys } from './interface';

export const styleMainTemplate: StyleRulesCallback<MainTemplateStyleKeys> = (theme) => ({
  root: {
    background: theme.palette.background.default,
    height: '100%',
    overflow: 'auto',
  },
  content: {
    margin: '50px auto',
    maxWidth: 900,
  },
});
