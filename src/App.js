import Navbar from "./_navbar/Navbar";
import Home from "./_home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./_create/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
