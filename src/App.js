import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      // console.log("DarkMode is on")
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode has been enabled", "success");
    }
    else
    {
      setMode('light')
      // console.log("LightMode is on")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="Texteria" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/" element = { <TextForm heading="Enter a text to analyze" showAlert ={showAlert} mode={mode}/> }>
          </Route>
    </Routes>
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
