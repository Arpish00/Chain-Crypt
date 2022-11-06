import './App.css';
import React from 'react';
// import { NavBar, Welcome, Footer, Services, Transactions } from "./components/*"; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Loader from './components/Loader';
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <NavBar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  );
}

export default App;
