import * as React from 'react';
import {connect} from 'react-redux';
import { PollCard } from '../../common/pollCard/pollCard';
import { Headline } from '../../_atoms/_material/headline/headline';
import { Title } from '../../_atoms/_material/title/title';
import { AddPollButton } from '../../common/addPollButton/addPollButton';
import {IAllPollsProps} from './interface';
import {selectAllPollsStateProps} from './selector';

class AllPollsPageComponent extends React.Component<IAllPollsProps, {}> {
  public render() {
    const {pollsLoading, pollsIds, isAuthenticated} = this.props;

    const content = pollsLoading
      ? <Title>Loading...</Title>
      : pollsIds.map((pollId) => <PollCard pollId={pollId} key={pollId} form={`pollCard_${pollId}`} />);

    return (
      <div>
        <Headline>All polls</Headline>
        {pollsIds.length === 0 && <Title>No polls yet</Title>}
        {content}
        {isAuthenticated && <AddPollButton/>}
      </div>
    );
  }
}

export const AllPollsPage = connect(selectAllPollsStateProps)(AllPollsPageComponent);
