import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/user/Login";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./pages/user/Register";
import Payment from "./pages/payment/Payment";
import PaymentHistory from "./pages/payment/PaymentHistory";
import TicketQR from "./pages/payment/TicketQR";
import Profile from "./pages/user/Profile";
import Landing from "./pages/Landing";


function App() {
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route element={<Profile/>} path='/profile' exact />
              <Route element={<Dashboard/>} path='/dashboard' exact />
              <Route element={<Payment/>} path='/purchase' exact />
              <Route element={<PaymentHistory/>} path='/purchase/history' exact />
              <Route element={<TicketQR/>} path='/purchase/ticket' exact />
            </Route>
            <Route element={<Login/>} path='/login' exact />
            <Route element={<Register/>} path='/register' exact />
            <Route element={<Landing/>} path='/landing' exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
