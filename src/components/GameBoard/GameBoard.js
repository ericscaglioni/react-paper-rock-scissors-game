import React, { Component } from 'react';
import Game from '../Game/Game.js';
import GameBoardButton from '../GameBoardButton/GameBoardButton.js';
import GameResult from '../GameResult/GameResult.js';

export default class GameBoard extends Component {

    constructor() {
        super();

        this.state = {
            gameStarted: false,
            gameFinished: false,

            totalRounds: 0,
            userWins: 0,
            computerWins: 0
        };
    }

    handleStartGameClick = () => (this.setState(() => ({
        gameStarted: true,
        gameFinished: false
    })));

    handleFinishGameClick = (totalRounds, userWins, computerWins) => (
        this.setState(() => ({
            gameStarted: false,
            gameFinished: true,
            totalRounds: totalRounds,
            userWins: userWins,
            computerWins: computerWins
        })
    ));

    render() {
        return (
            <div>
                {this.state.gameFinished &&
                    <GameResult 
                        totalRounds={this.state.totalRounds}
                        userWins={this.state.userWins}
                        computerWins={this.state.computerWins}
                    />
                }
                <GameBoardButton 
                    gameStarted={this.state.gameStarted}
                    gameFinished={this.state.gameFinished}
                    handleStartGameClick={this.handleStartGameClick} 
                />
                {this.state.gameStarted &&
                    <Game
                        handleFinishGameClick={this.handleFinishGameClick}
                    />
                }
            </div>
        );
    }
}

// { !this.state.gameStarted && <button onClick={this.handleStartGameClick}>Start</button> }