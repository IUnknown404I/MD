import './styles/main.css'
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sider/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
