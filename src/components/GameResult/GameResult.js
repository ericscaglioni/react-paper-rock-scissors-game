import React from 'react';

const GameResult = (props) => (
    <div>
        <p>User choice: {props.userPick} X Computer choice: {props.computerPick}</p>
        <p>{props.message}</p>
        <button onClick={props.handleGameStartClick}>Play again</button>
        <button onClick={props.handleRestartScoreBoardClick}>Restart Game</button>
    </div>
);

export default GameResult;