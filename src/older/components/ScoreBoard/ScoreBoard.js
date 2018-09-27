import React from 'react';

const ScoreBoard = (props) => (
    <div>
        <table border="1" width="100%">
            <tbody>
                <tr>
                    <td>Matches Played</td>
                    <td>{props.matchesPlayed}</td>
                </tr>
                <tr>
                    <td>User Wins</td>
                    <td>{props.userWins}</td>
                </tr>
                <tr>
                    <td>Computer Wins</td>
                    <td>{props.computerWins}</td>
                </tr>
                <tr>
                    <td>Ties</td>
                    <td>{props.matchesPlayed - (props.userWins + props.computerWins)}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default ScoreBoard;