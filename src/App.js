import './styles/main.css'
import './utils/snowing'
import React from "react";
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import Router from "./components/Router/Router";

function App() {
    //TODO: set the Context for onload is-animation-enabled check
  return (
    <div className="App">
      <Sider/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default App;
