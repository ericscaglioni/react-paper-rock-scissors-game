import React from 'react';
import { prototype } from 'dotenv-expand';

const resultMessage = (rounds, userWins, computerWins) => {
    if (userWins === computerWins) {
        return (
            <div>
                <h2>The game tied!</h2>
                <p>{`After ${rounds} round(s) we have no winner :/`}</p>
            </div>
        );
    } else if (userWins > computerWins) {
        return (
            <div>
                <h2>You're the champion!!</h2>
                <p>{`You've beaten the computer ${userWins} time(s) in ${rounds} round(s). You rock!`}</p>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Oh, you lost! =(</h2>
                <p>{`The computer ruled you ${computerWins} time(s) in ${rounds} round(s). Better luck next time`}</p>
            </div>  
        );
    }
};

const GameResult = (props) => (
    <div>
        {resultMessage(props.totalRounds, props.userWins, props.computerWins)}
        <table>
            <thead>
                <tr>
                    <th>Computer</th>
                    <th>You</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.computerWins} win(s)</td>
                    <td>{props.userWins} win(s)</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default GameResult;