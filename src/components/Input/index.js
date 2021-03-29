import React from 'react';

const Input = ({
    type,
    onChange,
    value
}) => {
    return (
        <input type={type} value={value} onChange={onChange} data-test="input-component"/>
    )
}
export default Input;