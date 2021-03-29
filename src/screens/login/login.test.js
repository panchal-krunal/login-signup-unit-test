
import Enzyme, { mount, shallow } from "enzyme"
import React from "react"
import Login from "./"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() })
const setup = () => {
    return mount(<Login />)
}

describe('set state based on input change', () => {
    let setState = jest.fn();
    let wrapper;
    beforeEach(() => {
        setState.mockClear();
        React.useState = () => ["", setState];
        wrapper = setup();
    });
    test('username input change', () => {
        let usernameInput = wrapper.find("[data-test='txtUsername']")
        usernameInput.simulate("change", { target: { value: 'admin' } })
        expect(setState).toHaveBeenCalledWith('admin')
    })
    test('password input change', () => {
        let passwordInput = wrapper.find("[data-test='txtPassword']")
        passwordInput.simulate("change", { target: { value: 'admin' } })
        expect(setState).toHaveBeenCalledWith('admin')
    })
})

describe('on submit button click ', () => {
    let setState = jest.fn();
    let wrapper;
    beforeEach(() => {
        setState.mockClear();
        React.useState = () => ["", setState];
        wrapper = setup();
    });
    afterEach(()=>{
        jest.clearAllMocks()
    })
    test('sets error if username or password is null', () => {
        let usernameInput = wrapper.find("[data-test='txtUsername']")
        usernameInput.simulate("change", { target: { value: '' } })
        let passwordInput = wrapper.find("[data-test='txtPassword']")
        passwordInput.simulate("change", { target: { value: '' } })
        let button = wrapper.find("[data-test='btnSubmit']");
        button.simulate('click')
        expect(setState).toHaveBeenCalledWith(true)
    })
    test('sets no error if username or password is admin/admin', () => {
        let usernameInput = wrapper.find("[data-test='txtUsername']")
        usernameInput.simulate("change", { target: { value: 'admin' } })
        let passwordInput = wrapper.find("[data-test='txtPassword']")
        passwordInput.simulate("change", { target: { value: 'admin' } })
        let button = wrapper.find("[data-test='btnSubmit']");
        button.simulate('click')
        expect(setState).toHaveBeenCalledWith(false)
    })
})