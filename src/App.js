import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from '../src/Components/Pages/Homepage';
import Navbar from '../src/Components/Header/Navbar/Navbar';
import Login from './Components/LoginAuthentication/Login/Login';
import Register from './Components/LoginAuthentication/Register/Register';
import AddJobs from './Components/Home/AddJobs/AddJobs';
import ShowJobs from './Components/Home/ShowJobs/ShowJobs';

export const infoContext = createContext()

function App() {

  const [info, setInfo] = useState({})

  return (
    <infoContext.Provider value={[info, setInfo]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/addJob">
            <AddJobs />
          </Route>
          <Route path="/allJobs">
            <ShowJobs />
          </Route>
        </Switch>
      </Router>
    </infoContext.Provider>
  );
}

export default App;
