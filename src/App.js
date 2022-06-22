import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

   const [mode, setMode] = useState('light');
   
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
   }

   const toggleMode = ()=>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'grey';
       showAlert("Dark mode has been enabled", "success");
       document.title  = 'TexUtils - Dark Mode';
      //  setInterval(() => {
      //   document.title  = 'TexUtils is Amazing';
      //  }, 2000);
      //  setInterval(() => {
      //   document.title  = 'Install TexUtils Now';
      //  }, 1400);
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title  = 'TexUtils - Light Mode';
    }
   }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route exact path="/about" element={<About/>} />
        </Routes>       */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
