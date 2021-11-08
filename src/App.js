import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LocalSto_react from "./Acomponent/LocalSto_react";
import LocalSto_redux from "./Acomponent/LocalSto_redux";
import {BrowserRouter as Router, Route,Switch, NavLink} from 'react-router-dom'
import store from "./store/Store"
import {Provider} from 'react-redux'
function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <div id="max">
          <NavLink className="navv" to="/" exact>React Local Storage</NavLink>
          <NavLink className="navv" to="/reduxlocalstorage" exact>Redux Local Storage</NavLink>
        </div><hr />
        <Switch>
          <Route exact path="/" component={LocalSto_react} />
          <Route exact path="/reduxlocalstorage" component={LocalSto_redux} />
        </Switch>
      </Router>
    </Provider>
    </>
  );
}

export default App;
