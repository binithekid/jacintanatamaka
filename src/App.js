//React-Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Home from "./home/home";
import Obituary from "./obituary/obituary";
import Gallery from "./gallery/gallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/obituary'>
          <Obituary />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
