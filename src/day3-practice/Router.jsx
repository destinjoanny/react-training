import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import FetchDataHooks from '../day1-practice/FetchHooks';
import TransferApp from '../day2-practice/components'
import Nav from './Nav';

const RouterApp = () => {
    return(
        <Router>
            <Nav />
        
            <Switch>
                <Route path="/app">
                    <TransferApp />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
            </Switch>
            
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return (
        <div className="w-3/4 m-auto">
            <FetchDataHooks />
        </div>
    )
  }

export default RouterApp