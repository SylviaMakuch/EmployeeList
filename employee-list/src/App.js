import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.js";
import EmployeeList from "./EmployeeList.js";
import Home from "./Home.js";
import Appointments from "./Appointments.js";
import Clients from "./Clients.js";

function App() {
  return (

  <BrowserRouter>
   <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
