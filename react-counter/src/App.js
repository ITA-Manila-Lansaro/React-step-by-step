import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component {

  constructor (props){
    super (props);
    this.state = {value : 0};
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {this.increaseNumber}><h1>Hello World</h1></button>
        <h1>Number: {this.state.value}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

increaseNumber = () => {
  this.setState({value: this.state.value + 1});
}

}



export default App;
