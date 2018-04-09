import * as React from 'react';
import {connect} from 'react-redux';

import { IModalsStore, ModalName } from '../../redux/modals/interface';
import { CreatePollDialog } from './createPollDialog/createPollDialog';
import { closeModal } from '../../redux/modals/actions';
import { IStore } from '../../redux/types';

const modals: Record<ModalName, React.ComponentClass<any>> = {
  CreatePoll: CreatePollDialog,
};

class ModalRootComponent extends React.Component<IProps, IState> {
  public state = {
    inTransition: false,
  };

  public render() {
    const {openedModalName, openedModalProps, isOpened} = this.props;
    const OpenedModal = modals[openedModalName];
    if (!isOpened && !this.state.inTransition || !OpenedModal) {
      return null;
    }
    return (
      <div>
        <OpenedModal
          {...openedModalProps}
          onExited={this.handleAfterExit}
          open={isOpened}
          onClose={this.onClose}
        />
      </div>
    );
  }

  private onClose = () => this.setState({ inTransition: true }, () => this.props.closeModal({}));

  private handleAfterExit = () => this.setState({ inTransition: false });
}

export const ModalRoot = connect(
  ({modals: {openedModalName, openedModalProps, isOpened}}: IStore) => ({
    openedModalName,
    openedModalProps,
    isOpened,
  }),
  { closeModal },
)(ModalRootComponent);

interface IProps extends IStateProps, IDispatchProps {}

interface IDispatchProps {
  closeModal: typeof closeModal;
}

interface IStateProps extends IModalsStore {}

interface IState {
  inTransition: boolean;
}

export interface IModalInjectedProps {
  onExited: () => void;
  open: boolean;
  onClose: () => void;
}

export function getModalInjectedProps(props: IModalInjectedProps) {
  const {
    onExited,
    open,
    onClose,
  } = props;
  return {
    onExited,
    open,
    onClose,
  };
}
