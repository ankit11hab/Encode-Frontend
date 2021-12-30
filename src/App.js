import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/user/Login";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./pages/user/Register";
import Payment from "./pages/payment/Payment";


function App() {
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route element={<Dashboard/>} path='/' exact />
              <Route element={<Payment/>} path='/purchase' exact />
            </Route>
            <Route element={<Login/>} path='/login' exact />
            <Route element={<Register/>} path='/register' exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
