import React from 'react';

const RoundResult = (props) => (
    <div>
        <h2>{props.resultMessage}</h2>
        <h4>You: <b>{props.userSelectedOption}</b> X Computer: <b>{props.computerSelectedOption}</b></h4>
        <div>
            <button onClick={props.handleNextRoundClick}>Play again</button>
            <button onClick={props.handleFinishGameClick}>Stop Playing</button>
        </div>
    </div>
);

export default RoundResult;