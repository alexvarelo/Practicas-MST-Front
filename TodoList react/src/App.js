import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar'
import React from 'react';
import MainList from './components/MainList';
import Card_form from './components/Card_form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import loadDb from './loadDb.js';



class App extends React.Component {
  constructor(props) {
    const { todos, filtered } = db.getState();
    super(props);
    this.state = {
      todos: todos,
      completed: [],
      filtered: filtered,
      abierto: false,
    }

  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  home = () => {
    this.setState({
      filtered: this.state.todos
    })
  }

  addTodo = todo => {
    if (todo.input === '') {
      return;
    }
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
      filtered: [...prevState.todos, todo]
    }));
    console.log(this.state.todos);
  }

  handleChangefilter = e => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.todos;
      newList = currentList.filter(item => {
        const lc = item.input.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
      console.log(newList);
    } else {
      newList = this.state.todos;
    }
    this.setState({
      filtered: newList
    });
  }

  showCompletedTodos = () => {
    let newList = [];
    console.log(this.state.todos);
    newList = this.state.todos.filter(item => item.isComplete);
    console.log("CompleteTodos:", newList);
    this.setState({
      filtered: newList
    }) 
  }

  render() {

    const modalStyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }


    return (
      <div className="App">
        <Navbar
          handleChangefilter={this.handleChangefilter}
          abrirModal={this.abrirModal}
          showCompletedTodos = {this.showCompletedTodos}
          home = {this.home}
        />
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            Añade una tarea
          </ModalHeader>
          <ModalBody>
            <Card_form
              updateValue={this.addTodo} />
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
        <div className="main-content">
          <MainList
            addTodo={this.addTodo}
            items={this.state.filtered}
          />
        </div>

      </div>
    );
  }
}

export default App;
