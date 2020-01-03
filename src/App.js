import React from "react"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import { StorageContextProvider } from "./contexts/storageContext"
import "./style.scss"
import List from "./components/List"
import MostRecent from "./pages/MostRecent"
import Doc from "./pages/Doc"
import New from "./pages/New"

const App = () => 
  <StorageContextProvider>
    <Router>
      <div className="container">
        <List/>
        <Link to="/new">New document</Link>
        <Switch>
          <Route exact path="/" component={MostRecent}/>
          <Route path="/new" component={New}/>
          <Route path="/:id" component={Doc}/>
        </Switch>
      </div>
    </Router>
  </StorageContextProvider>

export default App