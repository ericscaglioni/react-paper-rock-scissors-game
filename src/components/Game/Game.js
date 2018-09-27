import React from 'react';
import UserOptions from '../UserOptions/UserOptions.js';
import RoundResult from '../RoundResult/RoundResult.js';

export default class Game extends React.Component {
    constructor(){
        super();

        this.state = {
            round: 1,
            userWins: 0,
            computerWins: 0,
            userSelectedOption: undefined,
            computerSelectedOption: undefined,
            resultMessage: undefined
        }

        this.gameOptions = [
            'Rock',
            'Paper',
            'Scissors'
        ];
    }

    getGameOptionDescriptionByIndex = (index) => (this.gameOptions[index]);

    autoSelectOption = () => (Math.floor(Math.random() * this.gameOptions.length));

    compareChoices = (choice1, choice2) => ((3 + choice1 - choice2) % 3);

    handleSelectOption = (userSelectedIndex) => {
        const computerSelectedIndex = this.autoSelectOption();

        const result = this.compareChoices(userSelectedIndex, computerSelectedIndex);

        this.setState((prevState) => ({
            userSelectedOption: this.getGameOptionDescriptionByIndex(userSelectedIndex),
            computerSelectedOption: this.getGameOptionDescriptionByIndex(computerSelectedIndex),
            resultMessage: result === 0 ? 'DRAW' : result === 1 ? 'YOU WIN' : 'YOU LOSE',
            userWins: result === 1 ? prevState.userWins + 1 : prevState.userWins,
            computerWins: result === 2 ? prevState.computerWins + 1 : prevState.computerWins
        }));
    };

    handleNextRoundClick = () => {
        this.setState((prevState) => ({
            round: prevState.round + 1,
            resultMessage: undefined
        }));
    };

    render() {
        return (
            <div>
                {!this.state.resultMessage &&
                    <UserOptions
                        gameOptions={this.gameOptions}
                        handleSelectOption={this.handleSelectOption}
                    />
                }
                {this.state.resultMessage &&
                    <RoundResult 
                        resultMessage={this.state.resultMessage}
                        userSelectedOption={this.state.userSelectedOption}
                        computerSelectedOption={this.state.computerSelectedOption}
                        handleNextRoundClick={this.handleNextRoundClick}
                        handleFinishGameClick={this.props.handleFinishGameClick}
                    />
                }
            </div>
        );
    }
}