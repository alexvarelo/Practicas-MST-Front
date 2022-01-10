import React, { Component } from 'react'
import Card_form from './Card_form'
import Card from './Card'
import PropTypes from 'prop-types';
import './MainList.css';

class MainList extends Component {


    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        this.setState({
            todos: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todos: nextProps.items
        });
    }
    

    completeTodo = id => {
        console.log("Estoy en completeTodo");
        console.log(id);
        let updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                console.log("encontre el id");
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        this.setState({
            todos: updatedTodos
        })
        console.log(this.state);
    }



    render() {
        return (
            <div class="main-content">
                <h4>What are you gonna do today?</h4>
                <br></br>
                <Card_form updateValue={this.props.addTodo} />
                <br></br>
                <div className="main-list">
                    {this.state.todos.map((todo) => (
                        <Card
                            key={`${todo.id}`}
                            todo={todo}
                            completeTodo={this.completeTodo}
                        />
                    )
                    )}
                </div>


            </div>
        )
    }
}

export default MainList
