import React from 'react';
import './App.css';


const MAX_VALUE = 10;
const MIN_VALUE = 0;

class App extends React.Component {

    state = {value: 0};

    handleDecrement = () => this.state.value !== MIN_VALUE && this.setState({value: this.state.value - 1});

    handleIncrement = () => this.state.value !== MAX_VALUE && this.setState({value: this.state.value + 1});

    handleChange = (e) => (e.target.value <= MAX_VALUE && e.target.value >= MIN_VALUE)
        && this.setState({value: +e.target.value});

    inputClick = (e) => e.target.select();

    render() {
        const {value} = this.state;
        return <div>
            <button onClick={this.handleDecrement}>-</button>
            <input type="number" value={value} onChange={this.handleChange} onClick={this.inputClick}/>
            <button onClick={this.handleIncrement}>+</button>
        </div>

    }
}

export default App;
