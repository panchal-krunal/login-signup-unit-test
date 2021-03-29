import React from 'react';


const Button = ({
    buttonText,
    onClick
}) => {
    return (
        <button type="button" onClick={onClick} data-test="button-component">
            {buttonText}
        </button>
    )
}
export default Button