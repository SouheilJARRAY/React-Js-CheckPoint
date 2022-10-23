import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavbarExemple from './NavbarExample';
import React from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';
import HomeExample from './HomeExample';

function App() {
  return (
    <BrowserRouter>

      <NavbarExemple />
      <Routes>
                    <Route exact path="/Home" element={<HomeExample />} />
                    <Route exact path="/SignIn" element={<SignIn />} />
                    <Route exact path="/LogIn" element={<LogIn />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
