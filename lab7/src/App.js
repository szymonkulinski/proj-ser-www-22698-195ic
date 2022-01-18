import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Lista from './strona1';
import Lorem from "./strona2";
import Logowanie from "./strona3";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Strona1() {
  return (
      <div>
        <Lista></Lista>
      </div>
  );
}

function Strona2() {
  return (
      <div>
        <Lorem></Lorem>
      </div>
  );
}

function Strona3() {
  return (
      <div>
        <Logowanie></Logowanie>
      </div>
  );
}

function App() {
  return (
      <Router>
        <div>

          <nav class="navbar navbar-expand-lg  navbar-dark bg-warning">
            <h2 class="navbar-brand" ></h2>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active"><Link  to="/1">Lista</Link></a>
                <a class="nav-item nav-link link-dark"><Link to="/2">Lorem</Link></a>
                <a class="nav-item nav-link link-dark"><Link to="/3">Logowanie</Link></a>
              </div>
            </div>
          </nav>
          <body>
            <Routes>
              <Route exact path="/1" element={<Strona1 />}>
              </Route>
              <Route exact path="/2" element={<Strona2 />}>
              </Route>
              <Route exact path="/3" element={<Strona3 />}>
              </Route>
            </Routes>
          </body>
        </div>
      </Router>
  );
}

export default App;

