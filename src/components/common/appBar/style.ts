import { StyleRulesCallback } from 'material-ui/styles/withStyles';

export type AppBarStyleKeys
  = 'userButtons'
  | 'navigation'
  | 'root'
  ;

export const styleAppBar: StyleRulesCallback<AppBarStyleKeys> = () => ({
  root: {
    alignItems: 'center',
  },
  userButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  navigation: {
    display: 'flex',
    flex: 1,
  },
});
