import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={Forgot} />
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
  );
}

export default App;
