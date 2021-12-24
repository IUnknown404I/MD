import './styles/main.css'
import './utils/snowing'
import React from "react";
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import Router from "./components/Router/Router";
import ToTop from "./components/toTop/ToTop";
import {ContextProvider} from "./components/context/Context";

function App() {
  return (
    <div className="App">
        <ContextProvider>
            <Sider/>
            <Router/>
        </ContextProvider>

        <Footer/>
        <ToTop/>
    </div>
  );
}

export default App;
