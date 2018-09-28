import React from 'react';

const GameBoardButton = (props) => (
    <div>
        {
            !props.gameStarted && 
            <button onClick={props.handleStartGameClick}>
                {props.gameFinished ? 'Restart Game' : 'Start'}
            </button>
        }
    </div>
);

export default GameBoardButton;