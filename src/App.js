
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import About from './components/About/About'
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import NotFound from './components/NotFound/NotFound';
import Culture from './components/Culture/Culture';


function App() {
  return (
    <div className="App">

      <Router>
        <Header> </Header>

        <Switch>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail> </FriendDetail>
          </Route>
          <Route exact path="/about">
            <About> </About>
          </Route>
          <Route exact path="/about/culture">
            <Culture> </Culture>
          </Route>
          <Route path="/home">
            <Home> </Home>

          </Route>
          <Route path="*">
            <NotFound> </NotFound>

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
