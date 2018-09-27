import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard.js';
import GameResult from './components/GameResult/GameResult.js';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
        gameStarted: false,
        userHasPicked: false,
        userPickIndex: 0,
        userPick: undefined,
        computerPickIndex: 0,
        timeOutExpired: false,
        matchesPlayed: 0,
        userWins: 0,
        computerWins: 0,
        ties: 0,
        resultMessage: undefined
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

    handleRestartScoreBoardClick = () => {
        this.setState(() => ({
            gameStarted: false,
            userHasPicked: false,
            userPickIndex: 0,
            userPick: undefined,
            computerPickIndex: 0,
            timeOutExpired: false,
            matchesPlayed: 0,
            userWins: 0,
            computerWins: 0,
            ties: 0,
            resultMessage: undefined
        }));
    };

    handleUserPick = (value) => {
        const userPickIndex = this.getPickIndex(value);
        const userPick = this.getPickValueByIndex(userPickIndex);
        const computerPickIndex = this.computerPickIndex();
        const computerPick = this.getPickValueByIndex(computerPickIndex);

        const winner = this.compareChoices(userPickIndex, computerPickIndex);

        let message = undefined;
        let userWins = false;
        let computerWins = false;

        switch (winner) {
            case 1:
                userWins = true;
                message = 'You win!';
                break;
            case 2:
                computerWins = true;
                message = 'You lose!';
                break;
            default:
                message = `It's a tie`;
        }

        this.setState((prevState) => ({
            userHasPicked: true,
            userPickIndex: userPickIndex,
            computerPickIndex: computerPickIndex,
            userPick: userPick,
            computerPick: computerPick,
            matchesPlayed: prevState.matchesPlayed + 1,
            userWins: userWins ? prevState.userWins + 1 : prevState.userWins,
            computerWins: computerWins ? prevState.computerWins + 1 : prevState.computerWins,
            resultMessage: message
        }));
    };

  getPickIndex = (value) => (this.computerChoices.indexOf(value));

  getPickValueByIndex = (index) => (this.computerChoices[index]);

  computerPickIndex = () => {
    return Math.floor(Math.random() * this.computerChoices.length);
  };

  compareChoices = (choice1, choice2) => ((3 + choice1 - choice2) % 3);

  render() {
    return (
        <div>
            <h1>Welcome to the rock, paper and scissors game</h1>
            <h3>Let's see if you can beat the computer!</h3>

            {this.state.timeOutExpired && <p>Be brave and select an option!</p>}
            {!this.state.gameStarted && <button onClick={this.handleGameStartClick}>Start</button>}

            {
                this.state.gameStarted &&
                !this.state.userHasPicked &&

                <GameBoard
                    handleTimeOut={this.handleTimeOut}
                    handleUserPick={this.handleUserPick}
                />
            }

            {
                this.state.userHasPicked &&

                <GameResult
                    userPick={this.state.userPick}
                    computerPick={this.state.computerPick}
                    handleGameStartClick={this.handleGameStartClick}
                    handleRestartScoreBoardClick={this.handleRestartScoreBoardClick}
                    message={this.state.resultMessage}
                />
            }

            <ScoreBoard 
                matchesPlayed={this.state.matchesPlayed}
                userWins={this.state.userWins}
                computerWins={this.state.computerWins}
            />
        </div>
    );
  }
}

export default App;