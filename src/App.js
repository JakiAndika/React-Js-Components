import React from 'react';
import Counter from './components/Counter'
import Greet from './components/Greet'
import logo from './logo.svg'
import { ReactComponent as Logo } from './logo.svg'
import './App.css'
import './App.scss'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  let cartData = [
    { productName: "Laptop", price: 1000, qty: 2 },
    { productName: "Camera", price: 1000, qty: 1 },
    { productName: "Printer", price: 1000, qty: 3 },
    { productName: "Mouse", price: 1000, qty: 2 },
  ];
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3> Components </h3>
          </div>

          <div className="col-8">
            <img src="https:/create-react-app.dev/img/logo.svg"
              width={50}
              height={50}
            />

            <img
              src={logo}
              width={50}
              height={50}
            />
            <Logo width={50} height={50} />
            <Counter initialValue="4" />
            <Greet name="Dina" lang="ID" />
            <Greet name="Andi" lang="ID" />
            <button className="btn">Subscribe</button>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h3> Cart </h3>
          </div>
          <div className="col-8 mt-4">
            <Cart data={cartData} />
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
