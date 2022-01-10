import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div class="main-home">
            <h1>Bienvenido al Gamehub</h1>
            <h4>Lista de juegos</h4>
            <Link to="/register"><h2>Register</h2></Link>
            <Link to="/tictactoe"><h2>Tic Tac Toe</h2></Link>
        </div>
    );
};

