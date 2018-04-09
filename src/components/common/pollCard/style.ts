import { StyleRulesCallback } from 'material-ui/styles/withStyles';

export type PollCardStyleKeys
  = 'panelDetails'
  | 'author'
  | 'summaryRight'
  | 'deleteIcon'
  | 'deleteIconWrapper'
;

export const stylePollCard: StyleRulesCallback<PollCardStyleKeys> = () => ({
  panelDetails: {
    flexDirection: 'column',
  },
  author: {
    opacity: 0.7,
    marginRight: 10,
  },
  summaryRight: {
    marginLeft: 'auto',
    display: 'flex',
  },
  deleteIconWrapper: {
    position: 'relative',
    bottom: 2,
  },
  deleteIcon: {
    height: 24,
    width: 24,
  },
});
