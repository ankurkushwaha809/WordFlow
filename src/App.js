import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const modeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtnText("Enable Dark Mode");
      showAlerts("success","Light Mode Enabled");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(28, 33, 39)";
      setBtnText("Enable Light Mode");
      showAlerts("success","Dark Mode Enabled");
    }
  };

  const showAlerts = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <Router>
      <Navbar title="Ankur" mode={mode} modeChange={modeChange} btnText={btnText} />
      <Alerts alert={alert} />

      <Routes>
        <Route exact path="/" element={<TextForm textField="Text Box" Heading="Text Manipulation" mode={mode} showAlerts={showAlerts} />} />
        <Route exact path="/about" element={<About about="About Us" />} />
      </Routes>
    </Router>
  );
}

export default App;
