import React from 'react';
import UserOption from '../UserOption/UserOption.js';

const UserOptions = (props) => (
    <div>
        <ul>
            {
                props.gameOptions.map((option, optionIndex) => (
                    <UserOption
                        key={option}
                        optionText={option}
                        optionIndex={optionIndex++}
                        handleSelectOption={props.handleSelectOption}
                    />
                ))
            }
        </ul>
    </div>
);

export default UserOptions;