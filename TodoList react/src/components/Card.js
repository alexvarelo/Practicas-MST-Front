import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

class card extends Component {

    constructor() {
        super();
        this.completeTodo = this.completeTodo.bind(this);
    }

    completeTodo = id => {
        console.log("Estoy en card con el id", id)
        this.props.completeTodo(id);
    }

    render() {
        const { input, id, isComplete } = this.props.todo;
        //const { completeTodo } = this.props.completeTodo;

        //<div className={todo.isComplete ? 'main-list__complete' : 'main-list__incomplete'}>
        return (
            <div clasName="main-list">
                <div className="main-list__card">
                    <h3 className={isComplete ? "main-list__textcompleted" : 'main-list__text'}>{input}</h3>
                    <div className="icons">
                        <AiOutlineCheckCircle
                            size="20px"
                            onClick={() => this.completeTodo(id)}
                            style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="separator"></div>
            </div>
        )
    }
}

card.propTypes = {
    todo: PropTypes.shape({
        input: PropTypes.string
    })
}

export default card

