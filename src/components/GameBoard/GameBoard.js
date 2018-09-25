import React from 'react';
import Timer from '../Timer/Timer.js';
import UserOptions from '../UserOptions/UserOptions.js';

const GameBoard = (props) => (
    <div>
        <Timer handleTimeOut={props.handleTimeOut} />
        <UserOptions handleUserPick={props.handleUserPick} />
    </div>
);

export default GameBoard;