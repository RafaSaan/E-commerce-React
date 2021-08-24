import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Carrito from "./Pages/Carrito";
import Contacto from "./Pages/Contacto";
import Inicio from "./Pages/Inicio";
import Tienda from "./Pages/Tienda";
import Usuario from "./Pages/Usuario";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/tienda" component={Tienda} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario" component={Usuario} />
          <Route exact path="/carrito" component={Carrito} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
