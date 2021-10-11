import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Detail from "./component/Detail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/char/:char_id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
