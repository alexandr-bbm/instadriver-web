import * as React from 'react';
import {connect} from 'react-redux';
import { PollCard } from '../../common/pollCard/pollCard';
import { Headline } from '../../_atoms/_material/headline/headline';
import { Title } from '../../_atoms/_material/title/title';
import { AddPollButton } from '../../common/addPollButton/addPollButton';
import {IMyPollsProps} from './interface';
import {selectMyPollsStateProps} from './selector';
import {withAuthentication} from '../../_hocs/withAuthentication';
import Typography from 'material-ui/Typography';

class MyPollsPageComponent extends React.Component<IMyPollsProps, {}> {
  public render() {
    const {pollsLoading, pollsIds, isAuthenticated} = this.props;

    const content = pollsLoading
      ? <Title>Loading...</Title>
      : pollsIds.map((pollId) => (
          <PollCard
            pollId={pollId}
            key={pollId}
            form={`pollCard_${pollId}`}
          />
      ));

    return (
      <div>
        <Headline>My polls</Headline>
        {pollsIds.length === 0 && <Typography>You don't have any polls yet</Typography>}
        {content}
        {isAuthenticated && <AddPollButton/>}
      </div>
    );
  }
}

export const MyPollsPage = withAuthentication(connect(
  selectMyPollsStateProps,
  {},
)(MyPollsPageComponent));
