import * as React from 'react';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';
import { Button } from '../../_atoms/_material/button/button';
import {stylePollCard} from './style';
import {connect} from 'react-redux';
import {removePoll, votePoll} from '../../../redux/polls/actions';
import {reduxForm} from 'redux-form';
import {
  IPollCardFormData, IPollCardOwnProps, IPollCardProps,
} from './interface';
import {RadioGroupField} from '../../_atoms/_material/radioGroupField/radioGroupField';
import {selectPollCardProps} from './selector';
import Tooltip from 'material-ui/Tooltip';
import {withStyles} from 'material-ui';
import {compose} from 'redux';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

class PollCardComponent extends React.Component<IPollCardProps> {
  public render() {
    const {
      poll: {title, userId: pollUserId, user},
      user: {id: currentUserId},
      alreadyVoted,
      classes,
      handleSubmit,
      pristine,
    } = this.props;
    const isPollOfCurrentUser = currentUserId === pollUserId;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{title}</Typography>
          <div className={classes.summaryRight}>
            <Typography className={classes.author}>Author: {user.username || user.email}</Typography>
            {isPollOfCurrentUser && (
              <Tooltip title="Delete" className={classes.deleteIconWrapper}>
                <IconButton onClick={this.onPollRemove} className={classes.deleteIcon}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={{root: classes.panelDetails}}>
          <div>
            {this.renderPollOptions()}
          </div>
          <div>
            {!alreadyVoted && (
              <Tooltip title={this.getVoteButtonTooltipTitle()}>
                <span>
                  <Button
                    content="vote"
                    icon="check"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={pristine || !currentUserId}
                  />
                </span>
              </Tooltip>
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  private onPollRemove = () => {
    this.props.removePoll({pollId: this.props.poll.id});
  }

  private renderPollOptions = () => {
    const {alreadyVoted, poll: {pollOptions}, pollResults} = this.props;
    if (alreadyVoted) {
      return (
        <RadioGroupField name="pollOptionId">
          {pollOptions.map(({title: optionTitle, id}) =>
            <FormControlLabel
              value={String(id)}
              control={<Radio disabled />}
              label={`${optionTitle} - ${pollResults[id]}`}
              key={id}
            />,
          )}
        </RadioGroupField>
      );
    }
    return (
      <RadioGroupField name="pollOptionId">
        {pollOptions.map(({title: optionTitle, id}) =>
          <FormControlLabel
            value={String(id)}
            control={<Radio />}
            label={optionTitle}
            key={id}
          />,
        )}
      </RadioGroupField>
    );
  }

  private getVoteButtonTooltipTitle = (): string => {
    const {pristine, user: {id: currentUserId}} = this.props;
    if (!currentUserId) {
      return 'Only registered users can vote!';
    }
    if (pristine) {
      return 'Please, choose one of the options!';
    }
    return '';
  }
}

export const PollCard = compose(
  withStyles(stylePollCard),
  connect(selectPollCardProps, {removePoll}),
  reduxForm<IPollCardFormData, IPollCardProps>({
    onSubmit({pollOptionId}, dispatch) {
      dispatch(votePoll({pollOptionId}));
    },
  }),
)(PollCardComponent) as React.ComponentType<IPollCardOwnProps>;
