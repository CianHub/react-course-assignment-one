import React, { Component } from 'react';
import Userinput from './userInput/userInput';
import Useroutput from './userOutput/userOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'Username'
  };

  updateState = event => {
    console.log(1);
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Userinput
          change={this.updateState.bind(this)}
          old={this.state.username}
        />
        <Useroutput text={this.state.username} />
        <Useroutput text="test2" />
        <Useroutput text="test3" />
      </div>
    );
  }
}

export default App;
