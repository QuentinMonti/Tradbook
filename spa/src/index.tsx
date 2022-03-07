import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./storage/store";
import * as serviceWorker from "./serviceWorker";
import Application from "./view/Application";
import Counter from "./view/Counter";
import Error404 from "./view/Error404";
import "./index.css";
import AddWord from "./view/addWord";
import AddExpression from "./view/addExpression";
// import { Login }  from "./view/Login/Login";
import Login from "./view/Login";
import ChooseLangage from "./view/ChooseLangage";
import WordList from "./view/wordList";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Application} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/addWord" component={AddWord} />
          <Route exact path="/addExpression" component={AddExpression} />
          <Route exact path="/chooseLangage" component={ChooseLangage} />
          <Route exact path="/wordList" component={WordList} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
