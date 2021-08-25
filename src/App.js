import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Carrito from "./Pages/Carrito";
import Contacto from "./Pages/Contacto";
import Inicio from "./Pages/Inicio";
import Tienda from "./Pages/Tienda";
import Usuario from "./Pages/Usuario";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce().products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce().cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce().cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div className="App">
      <Router>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route exact path="/tienda">
            <Tienda products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/usuario">
            <Usuario />
          </Route>
          <Route exact path="/carrito">
            <Carrito />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
