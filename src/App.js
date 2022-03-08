import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Exchange from "./components/Exchange";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Token from "./components/Token";

function App() {
  return <div className="App">
    <Router>
    <Navbar />
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/exchange" component={Exchange}></Route>
      <Route exact path="/roadmap" component={Roadmap}></Route>
      <Route exact path="/token" component={Token}></Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
