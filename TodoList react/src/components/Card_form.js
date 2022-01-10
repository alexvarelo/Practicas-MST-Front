import React, { Component } from 'react'


const { uuid } = require('uuidv4');

class Card_form extends Component {
    //const { input, setInput } = useState('');
    //El setInput no funciona dice que no 

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            isComplete: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.updateValue(
            {
                input: this.state.input,
                id: uuid(),
                isComplete: this.state.isComplete
            });
        this.setState({ input: '' });
    };


    handleChange = e => {
        this.setState({
            input: e.target.value,
        });
    };

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a card"
                    value={this.state.input}
                    name="text"
                    className="todo-form__input"
                    onChange={this.handleChange}>
                </input>
                <button className="todo-form__button">Add Card</button>
            </form>
        )
    }
}

export default Card_form
