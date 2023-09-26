import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@shopify/polaris/build/esm/styles.css";
import React from "react";
// import SideBar from "./Components/SideBar";
import Health from "./Components/Health";
import Metrics from "./Components/Metrics";
import Home from "./home/Home";


function App() {
  return (
    // <div className="App" style={{ textAlign: "center" }}>
      <div>
      <Home/>
      <Router>
        {/* <SideBar/> */}
        <Routes>
          <Route path="/metrics"  exact element={<Metrics/>}/>
          {/* <Route path="/trace"  exact element={<HttpTrace/>}/> */}
          <Route path="/health"  element={<Health/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
