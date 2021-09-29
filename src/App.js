
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import About from './components/About/About'
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/about">
            <About> </About>
          </Route>
          <Route path="/home">
            <Home> </Home>

          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
/*
 <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Home> </Home>
          </Route>
          <Route path="/About"> <About></About> </Route>
          <Route path="/friends"> <Friends></Friends>  </Route>
          <Route path=""> <NotFound> </NotFound> </Route>
          <Route path="/"> <Home> </Home> </Route>
          <Route exact path="/">  <About> </About></Route>
        </Switch>
      </BrowserRouter>
*/
