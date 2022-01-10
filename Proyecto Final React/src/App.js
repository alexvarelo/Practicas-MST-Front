import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import TicTacToe from './components/TicTacToe';
import { Home } from './components/Home';
import logo from './logo.svg';
import RegisterForm from './components/autentication/RegisterForm';


const App = () => {
  return (
    <div className="main-app">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element = {<RegisterForm />} />
          <Route path="tictactoe" element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
