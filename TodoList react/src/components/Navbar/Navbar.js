import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';


class Navbar extends React.Component {

    constructor() {
        super();
    }



    render() {
        return (
            <nav>
                <FontAwesomeIcon 
                icon={faHome}
                onClick={this.props.home}
                className="home-icon" />
                <ul>
                    <li>
                        <div className="quick-find">
                            <form className="todo-form">
                                <input
                                    type="search"
                                    placeholder="Búsqueda"
                                    name="text"
                                    onChange={this.props.handleChangefilter}>
                                </input>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="search_icon"><path d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill="currentColor"></path></svg>
                            </form>
                        </div>
                    </li>
                    <button onClick={this.props.abrirModal}>+</button>
                    <li onClick={this.props.showCompletedTodos}>Tareas completadas</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar