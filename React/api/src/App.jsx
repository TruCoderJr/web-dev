import { useState } from "react";
import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Show from "./Component/Show";
import Services from "./Component/Services";
function App() {

  // const postProduct = () => {
  //   const products = {
  //     title: "New products",
  //     price: 29.99,
  //     description:
  //       "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //   };
  //   axios
  //     .post("https://fakestoreapi.com/products", products)
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="container m-5">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services/>} />
        
      </Routes>
    </div>
  );
}

export default App;
