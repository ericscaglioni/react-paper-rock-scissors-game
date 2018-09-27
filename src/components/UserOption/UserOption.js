import React from 'react';

const UserOption = (props) => (
    <li>
        <button onClick={(e) => {
            props.handleSelectOption(props.optionIndex)
        }}>
            {props.optionText
            }</button>
    </li>
);

export default UserOption;