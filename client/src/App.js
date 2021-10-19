import './App.css';
import Lauchs from './Components/Lauchs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lauche from './Components/Lauche';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Lauchs}></Route>
          <Route path="/lauche/:flight_number" component={Lauche}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
