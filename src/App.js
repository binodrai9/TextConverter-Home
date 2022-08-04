//import logo from './logo.svg';
import './App.css';
  
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

{/*
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";*/}





function App() {
  const[mode,setMode]=useState('light'); 
  const[alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);


  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      document.title='Dark mode enabled';
      //setInterval(() => {
        //document.title='Dark mode enabled';
      //}, 2000);
     // setInterval(() => {
      //  document.title='Install textConverter';
      //}, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      document.title='Light mode enabled';
    }
  }

  return (
    <>
    <Navbar name="TextConverter" home="Home" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my=3">
   {/* 
    <Router>
   
   <Routes>
         <Route exact path="about" element={<About/>} />*/}
          {/* <Route exact path="/" element={  */}
           <TextForm showAlert={showAlert} heading="Enter a text to analyse" mode={mode} /> 
       

      {/* </Routes> */}
      </div>
   {/*</Router>*/}    
    </>
  );
}

export default App;
