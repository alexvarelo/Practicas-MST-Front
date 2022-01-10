import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './games.css'

function TicTacToe() {

    const [isStarted, setisStarted] = useState(false);

    const [actualplayer, setactualplayer] = useState(null);

    const [actualgame, setactualgame] = useState([]);

    const table = [null, null, null, null, null, null, null, null, null]

    const [winO, setwinO] = useState(0);

    const [winX, setwinX] = useState(0);

    const [update_game, setupdate_game] = useState(0);

    const winning_options = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 6], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]


    useEffect(() => {
        start_game();
        setisStarted(false);
        setupdate_game(0);
    }, [update_game]); // Esta variable es utilizada para cambiar su valor, y cada vez que ocurra eso, 
    // se actualiza el tablero cuando el usuario presiona una square

    const checkWin = () => {
        setupdate_game(1);
        for (let win in winning_options) {
            let a = actualgame[winning_options[win][0]];
            let b = actualgame[winning_options[win][1]];
            let c = actualgame[winning_options[win][2]];
            if (a === null || b === null || c === null) {
                setupdate_game(0);
            }
        }
        for (let win in winning_options) {
            let a = actualgame[winning_options[win][0]];
            let b = actualgame[winning_options[win][1]];
            let c = actualgame[winning_options[win][2]];
            if (a === b && b === c && a !== null) {
                start_game();
                setisStarted(false);
                if (a === 'O') {
                    setwinO(winO + 1);
                }
                else {
                    setwinX(winX + 1)
                }
                alert("Enhorabuena, ha ganado el jugador " + a + ". El jugador ha ganado un total de " + (a === "O" ? winO : winX));
            }
        }
    }

    const start_game = () => {
        setisStarted(true);
        setactualgame(table);
        setactualplayer('O');
    }


    const handleClick = (id) => {
        if (isStarted) {
            let newTableState = [...actualgame];
            newTableState[id] = actualplayer;
            setactualgame(newTableState);
            if (actualplayer === "X")
                setactualplayer("O");
            else if (actualplayer === ("O"))
                setactualplayer("X");
            checkWin();
        }
        else {
            alert("Debe darle al boton de comenzar juego para comenzar a jugar!");
        }
    }

    return (
        <div>
            <Link to="/"><h3>Back to Home</h3></Link>
            <button className="game-button" onClick={() => start_game()}>{isStarted ? 'Reiniciar el juego' : 'Comenzar el juego'}</button>
            <div className="game-div">
                <div className={actualplayer === "X" ? 'game-player__active' : 'game-player'}>X</div>
                <div className='game-tictactoe'>
                    <div className='game-square' onClick={() => handleClick(0)}><h2 className="game-square--text">{actualgame[0]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(1)}><h2 className="game-square--text">{actualgame[1]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(2)}><h2 className="game-square--text">{actualgame[2]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(3)}><h2 className="game-square--text">{actualgame[3]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(4)}><h2 className="game-square--text">{actualgame[4]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(5)}><h2 className="game-square--text">{actualgame[5]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(6)}><h2 className="game-square--text">{actualgame[6]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(7)}><h2 className="game-square--text">{actualgame[7]}</h2></div>
                    <div className='game-square' onClick={() => handleClick(8)}><h2 className="game-square--text">{actualgame[8]}</h2></div>
                </div>
                <div className={actualplayer === "O" && isStarted? 'game-player__active' : 'game-player'}>O</div>
            </div>
            <h2>Le toca a {actualplayer}</h2>
        </div>
    )
}

export default TicTacToe;
