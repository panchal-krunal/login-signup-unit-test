import React from 'react';
import { Button, Input } from "../../components"

const Login = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const onUsernameChange = e => setUsername(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)
    const onSubmitButtonClick = () => {
        if (!username || !password) {
            setIsError(true)
        }
        else if (username === 'admin' && password === 'admin') {
            setIsError(false)
        }

    }
    return (
        <div data-test="container">
            <Input
                value={username}
                onChange={onUsernameChange}
                type="text"
                data-test="txtUsername"
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                type="password"
                data-test="txtPassword"
            />
            <Button
                data-test="btnSubmit"
                buttonText="Submit"
                onClick={onSubmitButtonClick}
            />
        </div>
    )
}
export default Login;