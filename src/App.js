import './styles/main.css'
import React from "react";
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import './utils/snowing'
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className="App">
      <Sider/>
        <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
