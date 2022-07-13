import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={Forgot} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>
  );
}

export default App;
