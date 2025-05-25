//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';







function App() {

 const [mode,setmode]=useState('light');

 const [alert,setalert]=useState(null);

 const showalert=(msg,type)=>{
     setalert({
      msg:msg,
      type:type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
 };

const enable=()=>{
     if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode is Enabled","success")
}
else {
   setmode('light')
      document.body.style.backgroundColor='white';
      showalert("Light mode is Enabled","success");
}
}


  return (
    <>
     <Router>
      <Navbar title="Textutils" about="About" mode={mode} toggle={enable} />
      <div className="container p-1 w-50">
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - Word Counter, Remove ExtraSpaces, Copy Text "
                mode={mode}
                showalert={showalert}
              />
            }
          />
        
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
