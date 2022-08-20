import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MenAll from './MenAll';
import MenBottom from './MenBottom';
import MenShirt from './MenShirt';
import MensTshirt from './MensTshirt';
import NavBar from "./NavBar";
function App() {
const[user, setUser] = useState()
  
  return (
    <BrowserRouter>
            <NavBar />
     

      <Switch>
        <Route path="/menshirt">
        <MenShirt />
        </Route>
        <Route path="/mentshirt">
        <MensTshirt />
        </Route>
        <Route path="/menbottom">
        <MenBottom />
        </Route>
        <Route path="/menall">
        <MenAll />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>



    </BrowserRouter>
   


  );
}

export default App;
