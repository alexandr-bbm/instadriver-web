import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import lightBlue from 'material-ui/colors/lightBlue';

import './styles/index';
import { createReduxStore } from './redux/createReduxStore';
import { MuiThemeProvider } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { App } from './components/app';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: lightBlue,
  },
});

export class Root extends React.Component {
  public render() {
    return (
      <StoreProvider store={createReduxStore()}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </StoreProvider>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('app'),
);
