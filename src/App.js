import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contacto from "./Pages/Contacto";
import Inicio from "./Pages/Inicio";
import Tienda from "./Pages/Tienda";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/tienda" component={Tienda} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
