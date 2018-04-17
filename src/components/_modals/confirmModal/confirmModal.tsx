import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { Button } from '../../_atoms/_material/button/button';
import { getModalInjectedProps } from '../modalRoot';
import {IConfirmModalProps, IConfirmModalState} from './interface';
import Typography from 'material-ui/Typography';
import {isNetworkStatusLoading, NetworkStatus} from '../../../utils/redux/networkStatus';
import {ErrorText} from '../../_atoms/_material/errorText/errorText';

const {
  DialogActions,
  DialogContent,
  DialogTitle,
} = require('material-ui/Dialog');

export class ConfirmModal extends React.Component<IConfirmModalProps, IConfirmModalState> {

  public state: IConfirmModalState = {
    networkStatus: NetworkStatus.None,
  };

  public render() {
    const {onClose, message, title} = this.props;
    const {networkStatus} = this.state;

    return (
      <Dialog
        fullWidth
        {...getModalInjectedProps(this.props)}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography>
            {message}
          </Typography>
          {networkStatus === NetworkStatus.Failed && <ErrorText/>}
        </DialogContent>
        <DialogActions>
          <Button
            content="confirm"
            color="primary"
            onClick={this.onSubmit}
            isLoading={networkStatus === NetworkStatus.Started || true}
          />
          <Button content="cancel" onClick={onClose} />
        </DialogActions>
      </Dialog>
    );
  }

  private onSubmit = async () => {
    const {onClose, onSubmit} = this.props;
    this.setState({
      networkStatus: NetworkStatus.Started,
    });

    try {
      await onSubmit();
      this.setState({networkStatus: NetworkStatus.Done});
      onClose();
    } catch (err) {
      this.setState({networkStatus: NetworkStatus.Failed});
    }
  }
}
