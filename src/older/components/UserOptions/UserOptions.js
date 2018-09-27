import React, {Component} from 'react';

export default class UserOptions extends Component {

    handleUserPick = (e) => {
        const userPickValue = e.target.innerHTML;
        this.props.handleUserPick(userPickValue);
    };

    render() {
        return (
            <div>
                <ul>
                    <li><button onClick={this.handleUserPick}>Paper</button></li>
                    <li><button onClick={this.handleUserPick}>Rock</button></li>
                    <li><button onClick={this.handleUserPick}>Scissors</button></li>
                </ul>
            </div>
        );
    };
}
