import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import chartimage from "./chart.png"
import ToyStore from "./ToyStore";
import Catalog from "./Catalog";
import About from "./About";
import Contacts from "./Contacts";
import Chart from "./Chart";


function App() {
  return <Router>
    <nav>
      <Link to="/" className='link main'>ToyStore</Link>
      <Link to="/catalog" className='link'>Catalog</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/contacts" className='link'>Contacts</Link>
      <Link to="/chart" className='link chart'>Chart <img src={chartimage} width="20px"/></Link>
    </nav>
<Routes>
  <Route path="/" element={<ToyStore/>}/>
  <Route path="/catalog" element={<Catalog/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path='/contacts' element={<Contacts/>}/>
  <Route path="/chart" element ={<Chart/>}/>
</Routes>
  </Router>
}

export default App;
