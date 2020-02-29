import React from 'react';
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmDetails from './components/ConfirmDetails';
import Congratulations from './components/Congratulations';
import AddUserDrawer from "./components/AddUserDrawer"
import Test from './components/Test';
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
          <Route exact path="/signup">
          <SignUp />
          </Route>
          <Route exact path="/confirm">
          <ConfirmDetails />
          </Route>
          <Route exact path="/userdrawer">
          <AddUserDrawer />
          </Route>
          <Route exact path="/congratulations">
          <Congratulations />
          </Route>
          <Route exact path="/test">
          <Test />
          </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/applicants">
          <Dashboard />
        </Route>
        <Route exact path="/allocations">
          <Dashboard />
        </Route>
        <Route exact path="/disbursements">
          <Dashboard />
        </Route>
        <Route exact path="/users">
          <Dashboard />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;

