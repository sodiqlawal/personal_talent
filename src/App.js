import React from 'react';
import Home from './components/Home'
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D64C9',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#09a23c',
    },
  },
});
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
          </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/talents">
          <Dashboard />
        </Route>
        <Route exact path="/payments">
          <Dashboard />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;

