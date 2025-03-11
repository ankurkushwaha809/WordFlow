// import './App.css';
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
// import About from "./components/About";

function App() {
  const [mode,setMode]= useState('light')

  const [btnText,setBtnText]= useState("Enable Dark Mode")

  const [alert,setAlert]= useState(null)

  function modeChange() {
    if (mode==='dark') {
      setMode('light')
      document.body.style.backgroundColor='white'

      setBtnText('Enable Light Mode')
      showAlerts("success","Light Mode")
    } else {
      setMode('dark')
      document.body.style.backgroundColor='rgb(28 33 39)'

  setBtnText('Enable Dark Mode')
  showAlerts("success","Dark Mode")


    }
  }

function showAlerts(message,type) {
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
}


  return (

    <>
   {/* <Navbar /> */}
   <Navbar title ="Ankur" mode={mode} modeChange={modeChange} btnText={btnText}/>
   <Alerts alert={alert}/>
   <TextForm textField="Text Box" Heading='Text Manipulation'mode={mode} showAlerts={showAlerts} />
   {/* <About about="About Us"/> */}
    </>
  );
}

export default App;
