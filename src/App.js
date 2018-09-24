import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameStarted: false,
      userHasPicked: false,
      userPick: undefined,
      computerPick: undefined,
      timeOutExpired: false
    }

    this.computerChoices = [
      'Rock',
      'Paper',
      'Scissors'
    ];
  };

  handleGameStartClick = () => {
    this.setState(() => ({ 
      gameStarted: true,
      userHasPicked: false,
      userPick: undefined,
      computerPick: undefined,
      timeOutExpired: false
    }));
  };

  handleTimeOut = () => {
    this.setState(() => ({ 
      gameStarted: false,
      timeOutExpired: true
    }));
  };

  handleUserPick = (value) => {
    this.setState(() => ({
      userHasPicked: true,
      userPick: this.getPickIndex(value),
      computerPick: this.computerPick()
    }));
  };

  getPickIndex = (value) => (this.computerChoices.indexOf(value));

  getPickValueByIndex = (index) => (this.computerChoices[index]);

  computerPick = () => {
    return Math.floor(Math.random() * this.computerChoices.length);
  };

  compareChoices = () => {
    const winner = (3 + this.state.userPick - this.state.computerPick) % 3;
    if(winner === 0){
      return "It's a tie!";
    }

    return winner === 1 ? 'You win!' : 'You lose!';
  };

  render() {
    return (
      <div>
        <h1>Welcome to the game</h1>
        {this.state.timeOutExpired && <p>Be brave and select an option!</p>}
        {!this.state.gameStarted && <button onClick={this.handleGameStartClick}>Start</button>}
        {this.state.gameStarted && !this.state.userHasPicked && (
          <div>
            <Timer handleTimeOut={this.handleTimeOut}/>
            <GameOptions handleUserPick={this.handleUserPick}/>
          </div>
        )}
        {this.state.userHasPicked && (
          <div>
            <p>User choice: {this.getPickValueByIndex(this.state.userPick)} X Computer choice: {this.getPickValueByIndex(this.state.computerPick)}</p>
            <p>{this.compareChoices()}</p>
            <button onClick={this.handleGameStartClick}>Play again</button>
          </div>
        )}
      </div>
    );
  }
}

class GameOptions extends Component {
  handleUserPick = (e) => {
    const userPickValue = e.target.innerHTML;
    this.props.handleUserPick(userPickValue);
  };

  render() {
    return (
      <div>
        <ul>
          <li><a onClick={this.handleUserPick} href='#'>Paper</a></li>
          <li><a onClick={this.handleUserPick} href='#'>Rock</a></li>
          <li><a onClick={this.handleUserPick} href='#'>Scissors</a></li>
        </ul>
      </div>
    );
  };
}

export default App;
