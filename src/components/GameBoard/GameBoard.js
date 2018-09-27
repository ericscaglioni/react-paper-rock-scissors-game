import React, { Component } from 'react';
import Game from '../Game/Game.js';

export default class GameBoard extends Component {

    constructor() {
        super();

        this.state = {
            gameStarted: false,
            gameFinished: false
        };
    }

    handleStartGameClick = () => (this.setState(() => ({gameStarted: true})));

    handleFinishGameClick = () => (this.setState(() => ({
        gameStarted: false,
        gameFinished: true
    })));

    render() {
        return (
            <div>
                {!this.state.gameStarted && <button onClick={this.handleStartGameClick}>Start</button>}
                {this.state.gameStarted &&
                    <Game
                        handleFinishGameClick={this.handleFinishGameClick}
                    />
                }
            </div>
        );
    }
}