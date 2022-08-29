import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import PrivateRouteDashboard from './components/PrivateRouteDashboard'
import AuthProvider from './contexts/AuthContext';
import React from 'react';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />}  />
          <Route exact path="/forgot-password" element={<Forgot />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/private" element={<PrivateRouteDashboard />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
